// SRP
class UserService {
    createUser(user) {
      console.log("Usuário criado:", user.name);
    }
  }
  
  class EmailService {
    sendWelcomeEmail(user) {
      console.log("Email enviado para:", user.name);
    }
  }
  
  const userService = new UserService();
  const emailService = new EmailService();
  
  const user = { name: "Marcos" };
  userService.createUser(user);
  emailService.sendWelcomeEmail(user);
  