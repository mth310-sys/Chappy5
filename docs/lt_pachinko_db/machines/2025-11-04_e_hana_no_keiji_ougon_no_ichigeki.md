# e花の慶次～黄金の一撃

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e花の慶次～黄金の一撃
manufacturer: ニューギン
releaseDate: 2025-11-04
modelType: ミドル / スマパチ / LT3.0プラス
gameType: 1種2種混合 / 直LT + 時短引き戻し / ST型LT + 2段階出玉強化RUSH
modelName: e花の慶次～黄金の一撃H4（検定番号510448）
jackpotProbability: 通常時図柄揃い 約1/399.76 / 傾奇者チャージ 約1/2723.4 / 殿MODE中 約1/520.12 / (超)天下無双RUSH中 約1/99.14
initialPayout: 図柄揃いは10R約1500個（払出）100%。傾奇者チャージは2R約200個（払出）。
rushEntryRate: 図柄揃い時50.1%で天下無双RUSHへ直行、49.9%で殿MODE100回。殿MODE引き戻し約18%を含むTOTAL RUSH突入率約59%。傾奇者チャージからもRUSH突入ルートありと複数資料が案内するが、絶対割合は公開テキストで未確認。
rushContinuationRate: 本機はRUSH=LT。天下無双RUSH / 超天下無双RUSHともST143回、継続約77%。通常RUSHとは別の非LT下位RUSHは存在しない。

ltName: 天下無双RUSH（演出モード: 一騎駆RUSH / 秀吉RUSH）。上位出玉状態は超天下無双RUSH。
ltEntryRoute: 図柄揃い初当りの50.1%でLT「天下無双RUSH」直行。残り49.9%は殿MODE100回へ進み、引き戻しでLTへ。傾奇者チャージからもLT/RUSH突入ルートが存在するが割合未確認。
ltEntryRate: 図柄揃い時のLT直行50.1%。殿MODE引き戻し込みTOTAL RUSH=LT突入率約59%。パチ7はLT突入確率を約1/666と直接掲載。傾奇者チャージを含む通常遊技全体の厳密な総LT到達率は資料定義差があるため、経路確率から独自再計算しない。
ltContinuationRate: 天下無双RUSH 約77%（ST143回、実質約1/99.14）。超天下無双RUSHも継続約77%で、継続率上昇型ではなく出玉振り分け強化型。
ltPayoutStructure: 天下無双RUSH中は3000個+α+超RUSH 18.6% / 1500個+超RUSH 4.9% / 3000個+α+RUSH 31.0% / 1500個+RUSH 45.5%。大当り時TOTAL 23.5%で超天下無双RUSHへ。超RUSH中は6000個+α 49.5% / 1500個 50.5%が複数資料で一致し、6000個側の一部で超RUSH継続、その他は通常LTへ戻る。3000個=1500個×2、6000個=1500個×4の合計払出で単一大当り出玉ではない。
totalPayoutDistribution: 通常時図柄揃い: 1500個+LT 50.1% / 1500個+殿MODE100回 49.9%。殿MODE中: 3000個+α+LT 0.8% / 1500個+LT 99.2%。天下無双RUSH中: 3000個+α+超RUSH 18.6% / 1500個+超RUSH 4.9% / 3000個+α+RUSH 31.0% / 1500個+RUSH 45.5%。超RUSH中は別項参照。
timeShortening: 殿MODE100回。天下無双RUSH / 超天下無双RUSHはST143回。
cTimeOrSpecialSystems: LT3.0プラス。LT内に出玉振り分けを強化する「超天下無双RUSH」があり、通常LTと同じ約77%継続のまま6000個+α比率が約半数へ上昇する。
ceilingOrSupport: 遊タイム非搭載。コンプリート機能搭載。

gameFlow: |
  通常時（図柄揃い 約1/399.76 / 傾奇者チャージ 約1/2723.4）
   ↓ 図柄揃い 10R約1500個
   ├─ 50.1% → LT「天下無双RUSH」
   └─ 49.9% → 殿MODE（時短100回 / 引き戻し約18%）
                 ├─ 引き戻し → LT「天下無双RUSH」
                 └─ 非引き戻し → 通常時
  ※傾奇者チャージからもLT/RUSH突入ルートあり（絶対割合未確認）
  LT「天下無双RUSH」（ST143回 / 約1/99.14 / 継続約77%）
   ├─ 大当りTOTAL 23.5% → 超天下無双RUSH
   └─ その他 → 天下無双RUSH継続
  超天下無双RUSH（ST143回 / 継続約77%）
   ├─ 6000個+α 49.5% → 主に天下無双RUSHへ（一部超RUSH継続）
   └─ 1500個 50.5% → 天下無双RUSH

notes:
- 本機はRUSH突入=LT発動の直LT型。非LTの下位RUSHとLTを分けて扱わない。
- 超天下無双RUSHはLTよりさらに上位の出玉強化状態だが、継続率は通常LTと同じ約77%。RUSH中大当りの23.5%で移行する。
- 超RUSH中6000個+α比率は必勝本・パチ7・ぱちレボ等が49.5%で一致。ちょんぼりすたの表のみ50.5%と逆転しているため孤立不整合として不採用。平均しない。
- HAZUSEページ上部に通常図柄揃い約1/339.76という孤立表示があるが、同機の型式情報と他多数資料は約1/399.76で一致。ページ内誤記とみなし、canonicalは1/399.76。
- 必勝本は導入日を2025-11-03と表記する一方、P-WORLD業界記事、P-WORLD機種DB、パチビー、情報島＋、パチ7等は全国導入2025-11-04で一致。祝日翌日の実導入境界として2025-11-04をcanonicalとする。
- 出玉は払出。3000個+α / 6000個+αは複数回大当りの合計で、単一10R出玉と混同しない。

sources:
- https://news.p-world.co.jp/articles/32141/greenbelt — 業界記事、機種発表/399帯/最大6000個+α、取得2026-09-23
- https://news.p-world.co.jp/articles/32217/greenbelt — 直営店先行導入/型式H4、取得2026-09-23
- https://www.p-world.co.jp/machine/database/10373 — P-WORLD、基本確率/50.1%・49.9%/殿MODE/最大出玉、取得2026-09-23
- https://hisshobon.com/machineinfo/99124/ — 必勝本、基本スペック/RUSH=LT/超RUSH23.5%/6000個49.5%、取得2026-09-23
- https://p.hisshobon.jp/machine/4611/1/111475 — 必勝本、詳細スペック/LT搭載/継続率、取得2026-09-23
- https://pachiseven.jp/articles/detail/25471 — パチ7、LT突入約1/666/主要振り分け/3000・6000個定義、取得2026-09-23
- https://www.atari7.com/pachinko/hananokeiji-ougon.php — アタリ7、導入日/確率/出玉/ゲームフロー、取得2026-09-23
- https://hazuse.com/machine/pachinko/PX0316/ — HAZUSE、型式H4/検定番号510448/導入日/継続率、取得2026-09-23（上部1/339.76は孤立誤記注記）
- https://p-johojima.jp/machine_spec/post-2074/ — 情報島＋、2025-11-04導入境界、取得2026-09-23
- https://www.pachibee.jp/machines/schedule/2025-11 — パチビー、2025-11-04導入境界、取得2026-09-23

confidence:
- LT搭載/名称/直LT構造: ANALYSIS_HIGH（複数解析・機種DB一致）
- 型式/導入日: INDUSTRY（直営先行記事 + 複数導入カレンダー）
- 基本確率/RUSH突入・継続: ANALYSIS_HIGH（複数一致）
- 主要振り分け: ANALYSIS_HIGH（複数一致）
- 超RUSH中6000個49.5%: ANALYSIS_HIGH（複数一致、孤立逆転表記あり）
- 傾奇者チャージ→LT絶対割合: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 傾奇者チャージからLT/RUSHへ移行する絶対振り分け率
- 超RUSH中6000個+α時に超RUSH自体が継続する絶対割合

conflicts: []
