import '../styles/hero.scss'

function Contact(){
    return(
        <div className='contact'>
          <form>
            <div>
              <label>Nombre</label>
              <input type="text" />
            </div>
            <input type="hidden" id='input'/>
            <div>
              <label>Email</label>
              <input type="email" name='email'/>
            </div>
            <div>
              <label id='mensaje'>Mensaje</label>
            </div>
            <div>
                <textarea type="text" id='textarea' name='message' required/>
            </div>
            <div>
                <button type='Sumbit' id='Submit'>Enviar</button>
            </div>
          </form>
        </div>
    )
}

export default Contact;