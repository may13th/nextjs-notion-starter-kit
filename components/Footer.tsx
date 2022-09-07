import * as React from 'react'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { AiFillZhihuSquare } from '@react-icons/all-files/ai/AiFillZhihuSquare'
import { AiFillZhihuCircle } from '@react-icons/all-files/ai/AiFillZhihuCircle'
import { FaWeibo } from '@react-icons/all-files/fa/FaWeibo'
import { FaRssSquare } from '@react-icons/all-files/fa/FaRssSquare'
import { RiWeiboLine } from '@react-icons/all-files/ri/RiWeiboLine'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FcHome } from '@react-icons/all-files/fc/FcHome'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'

import { useDarkMode } from 'lib/use-dark-mode'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}.
      
         <a className={styles.rssA} href="https://follow.it/may13th?pub"> RSS </a>
        support.
        
        <div> 
          <a className={styles.hitsA} href="#"><img className={styles.hits} src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.may13th.love&count_bg=%23C5C6C4&title_bg=%23F55252&icon=&icon_color=%23292323&title=hits&edge_flat=false"/></a>
        </div>
      
      </div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}
        
        {config.rss && (
          <a
            className={styles.rss}
            href={`https://follow.it/${config.rss}`}
            title={`RSS @${config.rss}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaRssSquare />
          </a>
        )}
        
        {config.weibo && (
          <a
            className={styles.weibo}
            href={`https://weibo.com/u/${config.weibo}`}
            title={`Weibo @${config.weibo}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWeibo />
          </a>
        )}
        
        {config.weibo2 && (
          <a
            className={styles.weibo}
            href={`https://weibo.com/u/${config.weibo2}`}
            title={`Weibo @${config.weibo2}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiWeiboLine />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillZhihuSquare />
          </a>
        )}
        
        {config.zhihu2 && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu2}`}
            title={`Zhihu @${config.zhihu2}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillZhihuCircle />
          </a>
        )}
        
        {config.homepage && (
          <a
            className={styles.homepage}
            href={`${config.homepage}`}
            title={`HomePage @${config.homepage}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FcHome />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelopeOpenText />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
