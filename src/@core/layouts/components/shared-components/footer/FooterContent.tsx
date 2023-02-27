// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, จัดทำ `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` โดย `}
        <Link target='_blank' href='https://www.fda.moph.go.th/'>
          สำนักงานคณะกรรมการอาหารและยา กระทรวงสาธารณสุข
        </Link>
      </Typography>
      {/* {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link target='_blank' href='https://mui.com/store/license/'>
            License
          </Link>
          <Link target='_blank' href='https://mui.com/store/contributors/themeselection/'>
            More Themes
          </Link>
          <Link
            target='_blank'
            href='https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/documentation'
          >
            Documentation
          </Link>
          <Link target='_blank' href='https://themeselection.com/support/'>
            Support
          </Link>
        </Box>
      )} */}
    </Box>
  )
}

export default FooterContent
