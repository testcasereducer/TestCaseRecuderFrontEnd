export default function Footer() {
    return (
        <div style={{ minHeight: '70vh', position: 'relative' }}>
    
          <footer
            className="text-center text-lg-start"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '80px',
              backgroundColor: 'rgba(0, 0, 0, 0.025)',
            }}
          >
            <div className="text-center p-4">
              © 2023 Test Case Reducer
            </div>
          </footer>
        </div>
      );
}