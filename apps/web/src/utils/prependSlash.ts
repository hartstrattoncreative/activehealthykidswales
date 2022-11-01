export default function prependSlash(arg?: string | null) {
  if (arg) {
    return arg.startsWith('/') ||
      arg.startsWith('http') ||
      arg.startsWith('mailto')
      ? arg
      : `/${arg}`;
  }
  return arg;
}
