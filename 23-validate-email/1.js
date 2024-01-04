const validateEmail = (email) => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");
    if (dotIndex === email.length - 1) {
      return false;
    }
    if (atIndex === 0) {
      return false;
    }
    if (email.includes("..")) {
      return false;
    }
    if (
      atIndex > dotIndex ||
      atIndex === dotIndex - 1 ||
      atIndex === dotIndex + 1
    ) {
      return false;
    }
  
    return true;
  };
  console.log(validateEmail("j@example.com"));
  console.log(validateEmail("@example.com"));
  console.log(validateEmail("john..smith@email.com"));
  console.log(validateEmail("john.@email.com"));
  console.log(validateEmail("john@.email.com"));
  console.log(validateEmail("j@ohn@.email.com"));