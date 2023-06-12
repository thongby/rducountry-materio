// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'หน้าหลัก',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Dashboard',
      icon: 'mdi:chart-box-outline',
      badgeContent: 'สถิติ',
      badgeColor: 'error',
      children: [
        {
          title: 'กรุงเทพมหานคร (เขต 13)',
          path: '/dashboards/rduprovince-page'
        },
        {
          title: 'สถิติด้านยา',
          path: '/dashboards/drugstats-page'
        },
        {
          title: 'ข้อมูลพื้นฐานจังหวัด',
          path: '/dashboards/chwdata-page'
        }
      ]
    },
    {
      sectionTitle: 'ผู้ประสานงาน'
    },
    {
      title: 'ผู้ประสานงานกระทรวง',
      path: '/mophcoord-page',
      icon: 'mdi:account-cog-outline',
    },
    {
      title: 'ผู้ประสานงานเขต',
      path: '/regioncoord-page',
      icon: 'mdi:briefcase-account-outline',
    },
    {
      title: 'ผู้ประสานงานจังหวัด',
      path: '/chwcoord-page',
      icon: 'mdi:clipboard-account-outline',
    },
    {
      title: 'ผู้ประสานงานอำเภอ',
      path: '/ampcoord-page',
      icon: 'mdi:account-search-outline',
    },
    {
      sectionTitle: 'เครือข่ายใช้ยาสมเหตุผล'
    },
    {
      title: 'ThaiRDU',
      path: '/thairdu-page',
      icon: 'mdi:pill',
    },
    {
      title: 'Tawai for Health',
      path: '/tawai-page',
      icon: 'mdi:database-eye-outline',
    },
    {
      title: 'Health Data Center',
      path: '/hdc-page',
      icon: 'mdi:database-search-outline',
    },
    {
      title: 'HPVC',
      path: '/hpvc-page',
      icon: 'mdi:monitor-eye',
    },
    /* {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'หน่วยงานที่เกี่ยวข้อง',
      icon: 'mdi:shield-outline',
    } */
  ]
}

export default navigation
