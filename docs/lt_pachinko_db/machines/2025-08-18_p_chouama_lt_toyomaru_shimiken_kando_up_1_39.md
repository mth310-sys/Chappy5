# P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: P【超甘LT】豊丸のとあるパチンコにしみけん参戦 感度UP1/39
formalModelName: P豊丸のとあるパチンコにしみけん参戦 AX2
manufacturer: 豊丸産業
releaseDate: 2025-08-18
modelType: 甘デジ / 超甘LT / LT3.0 PLUS
gameType: 一種二種混合 / 内部モード昇格型 / ST（普図時短）
jackpotProbability: 通常時 1/39.9 / RUSH中 1/35.4
initialPayout: 4R 約213個（払い出し）
rushEntryRate: モードA〜C 25% / モードD 100%
rushContinuationRate: ギンギンタイム10回 約33% / ギンギンタイム20回 約50% / 満開JOURNEY 約72%（いずれも残保留4個による引き戻し込み）
ltName: 超満開JOURNEY
ltEntryRoute: モードD滞在中の通常時大当りの50%から直行。またはRUSH中大当りの7.4%から直行。下位RUSH中は10Rの42.6%で段階的に上位RUSHへモードアップする経路もある。
ltEntryRate: モードD初当り時 50% / RUSH中大当り時 7.4%。通常遊技全体を分母とした総LT到達率の直接公表値は未確認のため推測しない。
ltContinuationRate: 約90%（75回＋残保留4個、残保留引き戻し込み）
ltPayoutStructure: 超満開JOURNEY中は10R 約1500個＋LT継続 50% / 4R 約213個＋LT継続 50%。残保留当選時はギンギンタイム10回中と同じ振り分けになる資料あり。
totalPayoutDistribution: |
  通常時モードA: 4R約213個＋ギンギンタイム10回 25% / 4R＋モードB昇格 25% / 4R＋モードA維持 50%。
  通常時モードB: 4R約213個＋ギンギンタイム20回 25% / 4R＋モードC昇格 25% / 4R＋モードB維持 50%。
  通常時モードC: 4R約213個＋満開JOURNEY40回 25% / 4R＋モードD昇格 25% / 4R＋モードC維持 50%。
  通常時モードD: 4R約213個＋超満開JOURNEY75回 50% / 4R＋満開JOURNEY40回 50%。
  ギンギンタイム10回中: 10R約1500個＋超満開JOURNEY 7.4% / 10R＋ギンギンタイム20回 42.6% / 4R約213個＋ギンギンタイム10回 50%。
  ギンギンタイム20回中: 10R約1500個＋超満開JOURNEY 7.4% / 10R＋満開JOURNEY 42.6% / 4R約213個＋ギンギンタイム20回 50%。
  満開JOURNEY中: 10R約1500個＋超満開JOURNEY 7.4% / 10R＋満開JOURNEY 42.6% / 4R約213個＋満開JOURNEY 50%。
  超満開JOURNEY中: 10R約1500個＋超満開JOURNEY 50% / 4R約213個＋超満開JOURNEY 50%。
timeShortening: 0 / 10 / 20 / 40 / 75回＋残保留4個
cTimeOrSpecialSystems: 通常時に内部モードA〜D。A〜Cは非RUSH大当りの25%で1段階モードアップ、50%でモード維持。モード転落なし。RUSH終了後はモードA濃厚とする解析資料あり。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。
gameFlow: |
  通常時（内部モードA〜D）
   ↓ 1/39.9で大当り
  A〜C: 25%で各対応RUSH / 25%で1段階モードアップして通常 / 50%でモード維持して通常
  D: 50%で満開JOURNEY / 50%でLT「超満開JOURNEY」
   ↓
  ギンギンタイム10回 → 10Rの42.6%でギンギンタイム20回へ / 7.4%でLT
  ギンギンタイム20回 → 10Rの42.6%で満開JOURNEYへ / 7.4%でLT
  満開JOURNEY40回 → 10Rの42.6%で同状態 / 7.4%でLT
   ↓
  LT「超満開JOURNEY」75回＋残保留4個、継続約90%
   ↓ 終了
  通常時へ
notes: |
  通常初当り全体を分母とする総LT到達率は、内部モード履歴を含むため経路別割合から独自計算せずUNVERIFIEDとする。
  4R約213個 / 10R約1500個はいずれも払い出し表記。
  P-WORLD検索結果の一部に超満開JOURNEY「ST70回」とする孤立表記があるが、P-WORLD基本スペック欄、パチマガスロマガ、情報島＋、1geki、K-Navi等は75回で一致。機種レコードは複数一致する75回を採用し、孤立表記を注記として保持する。
  残保留当選時はギンギンタイム10回中と同様の振り分けとなるため、LT中の残保留当選を通常のLT本体振り分けと混同しない。

sources:
  - url: https://news.p-world.co.jp/articles/31034/greenbelt
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: 豊丸販売開始発表、LT3.0 PLUS、1/39.9、モード別RUSH突入率・継続率。
  - url: https://p-johojima.jp/machine_spec/post-8672/
    retrievedAt: 2026-09-22
    confidence: INDUSTRY
    note: モード別の通常時・RUSH中大当り振り分け、LT7.4%、導入時期。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/317/kh02.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 1/39.9、右1/35.4、各ST回数、継続率、LT突入経路、遊タイムなし。
  - url: https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/toyomaru_pachi/317/kh04.php
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 通常時内部モードA-Dとゲームフロー。
  - url: https://www.p-world.co.jp/machine/database/10294
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 基本スペックと詳細大当り割合。ページ内一部に75回と整合しない70回表記あり。
  - url: https://1geki.jp/pachinko/p_sod2_sk39lt/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 型式名、導入日、LT搭載、一種二種混合、継続率・残保留条件。
  - url: https://p-kn.com/pachinko/4363/
    retrievedAt: 2026-09-22
    confidence: ANALYSIS_HIGH
    note: 型式名、2025-08-18導入、甘デジ/LT搭載。

confidence: ANALYSIS_HIGH
missingFields:
  - 通常遊技全体基準の総LT到達率（直接公表値）
conflicts: []
