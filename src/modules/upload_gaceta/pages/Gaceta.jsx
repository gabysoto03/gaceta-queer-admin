import { useState } from 'react'
import Header from '../../../components/Header'
import './../styles/Gaceta.css'

function Gaceta() {
  // Estado para créditos
  const [creditos, setCreditos] = useState({
    numEdicion: '',
    direccionGeneral: '',
    disenoPortada: '',
    gestionProyectos: ''
  })

  // Estado para equipo de la edición
  const [equipo, setEquipo] = useState([
    { rol: 'Redacción', miembros: [], coordinadorx: false },
    { rol: 'Edición', miembros: [], coordinadorx: false },
    { rol: 'Corrección de estilo', miembros: [], coordinadorx: false },
    { rol: 'Diseño', miembros: [], coordinadorx: false },
    { rol: 'Comunicación', miembros: [], coordinadorx: false },
    { rol: 'Página web', miembros: [], coordinadorx: false }
  ])

  // Estado para el archivo PDF
  const [pdfFile, setPdfFile] = useState(null)
  const [pdfFileName, setPdfFileName] = useState('')

  const handleCreditoChange = (field, value) => {
    setCreditos(prev => ({ ...prev, [field]: value }))
  }

  const handleEquipoChange = (index, field, value) => {
    setEquipo(prev => {
      const newEquipo = [...prev]
      if (field === 'miembro') {
        newEquipo[index].miembros = value ? [value] : []
      } else if (field === 'coordinadorx') {
        newEquipo[index].coordinadorx = value
      }
      return newEquipo
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/pdf') {
      setPdfFile(file)
      setPdfFileName(file.name)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'application/pdf') {
      setPdfFile(file)
      setPdfFileName(file.name)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar la gaceta
    console.log('Guardar gaceta:', { creditos, equipo, pdfFile })
  }

  return (
    <div className="gaceta-page">
      <Header activePage="Gaceta" />
      
      <div className="gaceta-container">
        <div className="gaceta-content">
          
					{/* Sección izquierda - Subir PDF */}
          <div className="gaceta-upload-section">
            <div
              className="pdf-upload-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="pdf-upload-input"
                id="pdf-upload"
              />
              <label htmlFor="pdf-upload" className="pdf-upload-label">
                <h2 className="pdf-upload-title">Subir Gaceta en PDF</h2>
                <p className="pdf-upload-subtitle">Sube el archivo de la Gaceta en PDF</p>
                {pdfFileName && (
                  <p className="pdf-file-name">{pdfFileName}</p>
                )}
              </label>
            </div>
          </div>

          {/* Sección media - Créditos */}
          <div className="gaceta-creditos-section">
            <h2 className="section-title">Créditos</h2>
            <div className="creditos-form">
              <div className="credito-field">
                <label>Num Edición</label>
                <input
                  type="text"
                  value={creditos.numEdicion}
                  onChange={(e) => handleCreditoChange('numEdicion', e.target.value)}
                  className="credito-input"
                />
              </div>
              <div className="credito-field">
                <label>Dirección general.</label>
                <input
                  type="text"
                  value={creditos.direccionGeneral}
                  onChange={(e) => handleCreditoChange('direccionGeneral', e.target.value)}
                  className="credito-input"
                />
              </div>
              <div className="credito-field">
                <label>Diseño de portada.</label>
                <input
                  type="text"
                  value={creditos.disenoPortada}
                  onChange={(e) => handleCreditoChange('disenoPortada', e.target.value)}
                  className="credito-input"
                />
              </div>
              <div className="credito-field">
                <label>Gestión de proyectos.</label>
                <input
                  type="text"
                  value={creditos.gestionProyectos}
                  onChange={(e) => handleCreditoChange('gestionProyectos', e.target.value)}
                  className="credito-input"
                />
              </div>
            </div>
          </div>

          {/* Sección derecha - Equipo de la edición */}
          <div className="gaceta-equipo-section">
            <h2 className="section-title">Equipo de la edición</h2>
            <div className="equipo-form">
              {equipo.map((item, index) => (
                <div key={index} className="equipo-row">
                  <div className="equipo-rol-label">{item.rol}</div>
                  <button
                    type="button"
                    className="equipo-add-button"
                    onClick={() => {
                      const nuevoMiembro = prompt(`Agregar miembro para ${item.rol}:`)
                      if (nuevoMiembro) {
                        handleEquipoChange(index, 'miembro', nuevoMiembro)
                      }
                    }}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={item.miembros[0] || ''}
                    onChange={(e) => handleEquipoChange(index, 'miembro', e.target.value)}
                    className="equipo-input"
                    placeholder="Nombre del miembro"
                  />
                  <label className="equipo-coord-label">
                    Coordinadorx
                    <input
                      type="checkbox"
                      checked={item.coordinadorx}
                      onChange={(e) => handleEquipoChange(index, 'coordinadorx', e.target.checked)}
                      className="equipo-checkbox"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón Guardar gaceta */}
        <div className="gaceta-save-container">
          <button type="button" onClick={handleSubmit} className="gaceta-save-button">
            GUARDAR GACETA
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gaceta
