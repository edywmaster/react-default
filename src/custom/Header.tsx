import NextLink from 'next/link'
import { Box } from '../components/Box'
import { Flex } from '../components/Flex'
import { Heading } from '../components/Heading'
import { Link } from '../components/Link'
import { Text } from '../components/Text'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'


export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        jc: 'space-between',
        position: 'relative',
        zIndex: '1',
        height: 70,
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
              boxShadow: 'none',
            },
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            EWM
          </span>
          <Logo />
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center' }}>
        <NextLink href="#" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Docs</Text>
          </Link>
        </NextLink>
        <NextLink href="#" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Blog</Text>
          </Link>
        </NextLink>
        <Link
          href="#"
          variant="subtle"
          css={{
            mr: '$5',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$7' },
          }}
        >
          <Text>GitHub</Text>
        </Link>
        <Link
          href="#"
          variant="subtle"
          css={{ mr: '$5', '@bp2': { mr: '$7' } }}
        >
          <Text>Discord</Text>
        </Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
