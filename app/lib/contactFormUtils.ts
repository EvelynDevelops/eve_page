export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    selectedOption: string;
  }
  
  export interface ContactFormErrors {
    name: boolean;
    email: boolean;
    message: boolean;
    selectedOption: boolean;
  }
  
  interface SubmitResponse {
    success: boolean;
    message: string;
  }
  
  export const submitContactForm = async (formData: ContactFormData): Promise<SubmitResponse> => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return {
        success: true,
        message: "Message sent successfully!"
      };
    } catch (error) {
      console.error("Error submitting form:", error);
      return {
        success: false,
        message: "Failed to send message. Please try again."
      };
    }
  };
  
  export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateForm = (formData: ContactFormData): { 
    isValid: boolean; 
    errors: ContactFormErrors;
  } => {
    const errors: ContactFormErrors = {
      name: false,
      email: false,
      message: false,
      selectedOption: false
    };
    
    // Set error flags
    if (!formData.name) errors.name = true;
    if (!formData.email || !isValidEmail(formData.email)) errors.email = true;
    if (!formData.message) errors.message = true;
    if (!formData.selectedOption) errors.selectedOption = true;
  
    return {
      isValid: !Object.values(errors).some(error => error),
      errors
    };
  };