import { useState } from 'react';

export interface ContactFormState {
  loading: boolean;
  success: boolean | null;
  error: string | null;
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

interface SubmissionResponse {
  success: boolean;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

export const useContactForm = () => {
  const [state, setState] = useState<ContactFormState>({
    loading: false,
    success: null,
    error: null,
    formData: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const updateField = (field: keyof ContactFormState['formData'], value: string) => {
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        [field]: value,
      },
    }));
  };

  const submitForm = async (): Promise<boolean> => {
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      success: null,
    }));

    try {
      const apiUrl = (import.meta as any).env.VITE_API_URL || 'http://localhost:3001';

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.formData),
      });

      const data: SubmissionResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        error: null,
        formData: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      }));

      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';

      setState((prev) => ({
        ...prev,
        loading: false,
        success: false,
        error: errorMessage,
      }));

      return false;
    }
  };

  const resetForm = () => {
    setState({
      loading: false,
      success: null,
      error: null,
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    });
  };

  return {
    ...state,
    updateField,
    submitForm,
    resetForm,
  };
};
