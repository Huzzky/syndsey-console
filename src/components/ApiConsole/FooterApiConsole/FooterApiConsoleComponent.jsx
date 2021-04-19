import BtnFormatJSON from './BtnFormatJSON'
import BtnSendJSONToServer from './BtnSendJSONToServer'
import '../../../assets/_footer.scss'

export const FooterApiConsoleComponent = () => {
  return (
    <div className="footer">
      <BtnSendJSONToServer />
      <a
        className="footer__link-github"
        href="https://github.com/Huzzky"
        alt="My github"
      >
        @Huzzky
      </a>
      <BtnFormatJSON />
    </div>
  )
}
