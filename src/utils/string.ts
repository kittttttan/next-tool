export function range(n: number): string {
  const as: number[] = [];
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      as.push(i);
    }
  }

  return as.join('\n');
}

export function rangeChar(n: number): string {
  let as: string[] = [];
  if (n > 0) {
    const a = 'a'.charCodeAt(0);
    for (let i = 0; i < n; i++) {
      as.push(String.fromCharCode(a + i));
    }
  }

  return as.join('\n');
}

export function sortLine(s: string): string {
  let ss = s
    .split('\n')
    .sort();

  return ss.join('\n');
}

export function sortNumericLine(s: string): string {
  let ss = s
    .split('\n')
    .sort((a: string, b: string): number => {
      const reg = /^\d+/;
      const as = a.match(reg);
      const bs = b.match(reg);
      const an = as ? +as[0] : 0;
      const bn = bs ? +bs[0] : 0;

      return an - bn;
    });

  return ss.join('\n');
}

export function reverseLine(s: string): string {
  let ss = s
    .split('\n')
    .reverse();

  return ss.join('\n');
}

export function removeBr(s: string): string {
  return s.replace(/[\r\n]+/g, '');
}

export function removeBlankLine(s: string): string {
  return s.replace(/[\r\n]+/g, '\n');
}

export function escapeHtml(s: string): string {
  return s.replace(/[&'`"<>]/g, (match): string => {
    return {
      '&': '&amp;',
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    }[match]!
  });
}

export function unescapeHtml(s: string): string {
  return s.replace(/&amp;|&#x27;|&#x60;|&quot;|&lt;|&gt;/g, (match): string => {
    return {
      '&amp;': '&',
      '&#x27;': "'",
      '&#x60;': '`',
      '&quot;': '"',
      '&lt;': '<',
      '&gt;': '>'
    }[match]!
  });
}

export function stripHtml(s: string): string {
  let tmp = document.createElement('div');
  tmp.innerHTML = s;
  return tmp.innerText || '';
}

export function noCase(s: string): string {
  return s.replace(/ *([A-Z]*)([A-Z][a-z])/g, function(match, upper, word) {
    return upper + ' ' + word.toLowerCase();
  });
}

export function camelCase(s: string): string {
  const l = s.charAt(0).toLowerCase() + s.slice(1);

  return l.replace(/[-_ ]+(.)/g, function(match, word) {
    return (word as string).toUpperCase();
  });
}

export function pascalCase(s: string): string {
  const p = camelCase(s);

  return p.charAt(0).toUpperCase() + p.slice(1);
}

export function constCase(s: string): string {
  return s.toUpperCase().replace(/[- ]+(.)/g, function(match, word) {
    return '_' + word;
  });
}