import { relations } from 'drizzle-orm';
import { pgTable, pgEnum, serial, text, integer, varchar, timestamp, boolean } from 'drizzle-orm/pg-core';

export const userPositions = pgEnum('positions', ['Member', 'Leader', 'Section manager', 'General manager']);
export const activityTypes = pgEnum('activity_types', ['Tel', 'Visit', 'E-mail', 'SNS', 'Negotiation']);
export const phases = pgEnum('phases', ['unset', 'progress', 'complete', 'canceled', 'pending'])

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	email: varchar('email').notNull(),
	position: userPositions().default('Member'),
	tel: varchar('', { length: 14 }).notNull(),
	isAdmin: boolean('is_admin').notNull().default(false),
});

export const customers = pgTable('projects', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	address: text('address').notNull(),
	tel: varchar('tel', { length: 14 }).notNull(),
	industry: varchar('industry').notNull(),
});

export const representatives = pgTable('representatives', {
	id: serial('id').primaryKey(),
	name: varchar('name').notNull(),
	email: varchar('email').notNull(),
	tel: varchar('tel', { length: 14 }).notNull(),
	customerId: integer('customer_id').notNull().references(() => customers.id),
});

export const activities = pgTable('activities', {
	id: serial('id').primaryKey(),
	type: activityTypes('type').notNull().default('Tel'),
	date: timestamp('date').notNull().defaultNow(),
	userId: integer('user_id').notNull().references(() => users.id),
	customerId: integer('customer_id').notNull().references(() => customers.id),
	comment: text('comment'),
});

export const todos = pgTable('todos', {
	id: serial('id').primaryKey(),
	task: text('task').notNull(),
	date: timestamp('date').notNull().defaultNow(),
	isDone: boolean('is_done').notNull().default(false),
	userId: integer('user_id').notNull().references(() => users.id),
});

export const projects = pgTable('projects', {
	id: serial('id').primaryKey(),
	title: varchar('title'),
  desc: text().notNull(),
  phase: phases(),
  customerId: integer('customer_id').notNull().references(() => customers.id),
  userId: integer('user_id').notNull().references(() => users.id),
});

export const customerRelation = relations(customers, ({ one, many }) => ({
	users: one(users),
	representatives: one(representatives),
	projects: many(projects),
	activities: many(activities),
}));

export const userRelation = relations(users, ({ many }) => ({
	activities: many(users),
	todos: many(todos),
}));