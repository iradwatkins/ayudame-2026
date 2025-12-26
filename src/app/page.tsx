export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '0.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}>
          Ayúdame
        </h1>
        <p style={{
          fontSize: '1.5rem',
          opacity: 0.9,
          marginBottom: '3rem',
          fontWeight: 300
        }}>
          .com.do
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Próximamente
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.8,
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Tu plataforma de servicios en República Dominicana.<br/>
            Encuentra ayuda para todo lo que necesites.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="mailto:info@ayudame.com.do"
              style={{
                background: 'white',
                color: '#dc2626',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Contáctanos
            </a>
          </div>
        </div>

        <p style={{
          marginTop: '3rem',
          opacity: 0.6,
          fontSize: '0.875rem'
        }}>
          © 2025 Ayúdame. Todos los derechos reservados.
        </p>
      </div>
    </main>
  )
}
