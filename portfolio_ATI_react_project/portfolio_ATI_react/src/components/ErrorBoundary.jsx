import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para exibir a UI de fallback
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log do erro (pode ser enviado para serviço de monitoramento)
    console.error('Error Boundary capturou um erro:', error, errorInfo);
    
    // Ignora erros de extensões do navegador
    if (
      error.message?.includes('extension') ||
      error.message?.includes('chrome-extension') ||
      error.message?.includes('insertBefore') ||
      error.message?.includes('background page')
    ) {
      // Reseta o erro após 100ms para não afetar a UI
      setTimeout(() => {
        this.setState({ hasError: false, error: null });
      }, 100);
    }
  }

  render() {
    if (this.state.hasError) {
      // UI de fallback personalizada
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Algo deu errado
            </h2>
            <p className="text-gray-600 mb-6">
              Detectamos um problema temporário. Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all"
            >
              Recarregar Página
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Se o problema persistir, entre em contato com o suporte.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
