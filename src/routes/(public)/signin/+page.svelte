<div class="wrap">
  <div class="form-set">
    <p class="caption">Sign in</p>
    <form method="post">
      <div>
        <label for="id">Email</label>
        <input type="text" name="email" placeholder="Enter your email.">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Enter your password.">
      </div>
      <div class="center">
        <input type="submit" value="Sign in">
      </div>
    </form>
    <div class="center">
      <a href="/forget-password">forget password</a>
    </div>
  </div>
</div>

<style lang="scss">
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .caption {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 24px;
  }
  .form-set {
    padding: 48px 56px;
    width: 640px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.1),
                -4px -4px 12px rgba(255, 255, 255, 0.4);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 16px;
  }
  label {
    display: block;
    font-size: 0.87rem;
    margin-bottom: 2px;
    color: #555;
  }
  input[type="text"], input[type="password"] {
    padding: 12px 8px;
    border: 1px solid #aaa;
    border-radius: 4px;
    width: 100%;
  }
  input[type="submit"] {
    border: 0;
    background-color: #9c2828;
    color: #fff;
    font-weight: 700;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
  .center {
    text-align: center;
  }
</style>