# e アズールレーン2 THE ANIMATION 超次元

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e アズールレーン2 THE ANIMATION 超次元
manufacturer: 京楽産業.
modelName: eアズールレーンTHE ANIMATION2K6
releaseDate: 2025-12-08
modelType: ライトミドル / スマパチ / LT

gameType: 1種2種混合 / LTは転落タイプ

jackpotProbability:
- 通常時 ATTACK確率: 約1/169.9
- 共同戦線RUSH中 図柄揃い確率: 約1/21.9
- 共同戦線RUSH中 終了確率: 約1/71.7
- 通常時の約1/169.9は本機のATTACK確率として公表される値。一般的な図柄揃い大当り確率と機械的に同一視しない。

initialPayout:
- ATTACK: 約320～790個（払い出し/全入賞口を含む試射値表記）
- ATTACK成功後の決戦BIG BONUS: 約1500個

rushEntryRate:
- ATTACK成功率: 約30%
- ATTACK成功後、決戦BIG BONUSへ。
- 決戦BIG BONUS成功率: 約50%（残保留4個の引き戻し約17.0%を含む）
- 本機は非LTの継続RUSHを経由せず、決戦BIG BONUS突破からLT「共同戦線RUSH」へ入る構造。

rushContinuationRate:
- 非LT下位RUSH: 該当なし
- 決戦BIG BONUSはLTへの入口状態で、実質次回までの時短＋大当りで構成。

ltName: 共同戦線RUSH

ltEntryRoute:
- 通常時 → 約1/169.9のATTACK → ATTACK成功（約30%） → 決戦BIG BONUS約1500個 → セイレーンバトル勝利/残保留引き戻しを含む約50%で共同戦線RUSH（LT）
- 明石チャレンジ成功時はRUSH濃厚との解析あり。

ltEntryRate:
- ATTACK成功率 約30%
- 決戦BIG BONUS成功率 約50%（残保留4個引き戻し約17.0%込み）
- 通常遊技全体を分母にした総LT到達率/確率の直接公表値は今回の横断調査で確認できず。30%×50%等から独自算出しない。

ltContinuationRate:
- 共同戦線RUSH: 約81%
- 図柄揃い約1/21.9 vs 終了約1/71.7の転落タイプ。
- 約81%は残保留4個による引き戻し約17.0%を含む公表継続率。

ltPayoutStructure:
- 共同戦線RUSH中の図柄揃い: Ave約3000個OVER 100% → 共同戦線RUSH継続
- 「Ave約3000個OVER」は図柄揃い時10R大当り×2回分（特図2に限る）に加え、全入賞口の払い出しを含む試射値。単一10R大当りの3000個と解釈しない。

totalPayoutDistribution:
- 通常時ATTACKの出玉内訳（解析値）: 約790個 4.1% / 約620個 11.1% / 約470個 22.1% / 約360個 36.7% / 約320個 26.0%
- 通常時ATTACK後: 約30%が決戦BIG BONUSへ / 約70%が通常へ
- 決戦BIG BONUS中: 約1500個＋共同戦線RUSH 約50% / 約1500個＋通常 約50%（残保留引き戻し込みの表現）
- 共同戦線RUSH中: Ave約3000個OVER＋共同戦線RUSH 100%

timeShortening:
- 決戦BIG BONUS: 実質次回まで
- 共同戦線RUSH: 実質次回大当り or 転落まで
- 残保留4個あり。決戦BIG BONUS成功率約50%およびLT継続約81%はいずれも残保留効果を含む。

cTimeOrSpecialSystems:
- 史上最高出力をうたう「異次元アタッカー」を搭載。大型アタッカーに加え15個賞球ポケットへの入賞を含めてAve3000個OVERを実現する設計。
- Cタイムとしての独立したLT経路は今回確認なし。

ceilingOrSupport:
- コンプリート機能搭載。
- 遊タイム/LT到達用天井は今回確認なし。

gameFlow: |
  通常時
   ↓ 約1/169.9 ATTACK
  ATTACK（約320～790個）
   ├─ 失敗側 約70% → 通常へ
   └─ 成功 約30% → 決戦BIG BONUS（約1500個）
                         ├─ 失敗側 → 通常へ
                         └─ 成功 約50%（残保留4個引き戻し込み）
                              ↓
                         LT「共同戦線RUSH」
                         図柄揃い約1/21.9 / 終了約1/71.7
                         継続約81%（残保留4個込み）
                         図柄揃い時 Ave約3000個OVER 100%

notes:
- 京楽公式は通常ATTACK約1/169.9、RUSH継続約81%、ALL Ave3000個OVERを公表。
- HAZUSE、一撃、P-WORLD、必勝本でLT名称・入口・確率・転落率・主要振り分けを横断照合。
- 決戦BIG BONUS成功率約50%は残保留4個の引き戻し約17.0%込み。単純な特図2振り分けだけの50%と誤読しない。
- 通常時ATTACKの320～790個は全入賞口を含む試射値/払い出し表記。右のAve3000個OVERも同様に定義を保持。
- 2024年の「Pアズールレーン THE ANIMATION 異次元トリガー」とは別機種・別LT構造。

sources:
- https://www.kyoraku.co.jp/news/detail/851 — メーカー公式NEWS。約1/169.9、RUSH約81%、ALL Ave3000個OVER。取得日 2026-09-23。
- https://yugi-nippon.com/pachinko-new-machine/post-74081/ — 業界記事。型式名、メーカー発表、主要性能。取得日 2026-09-23。
- https://hazuse.com/machine/pachinko/5P0983/ — HAZUSE。LT明示、型式、導入日、ATTACK/決戦BIG/LT構造、振り分け。取得日 2026-09-23。
- https://1geki.jp/pachinko/e_azuren2/ — 一撃。型式、確率、LT構造、転落率、出玉定義。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10386 — P-WORLD。主要振り分け、ゲームフロー。取得日 2026-09-23。
- https://p.hisshobon.jp/machine/4652/1/112496 — 必勝本。初当り出玉詳細、決戦BIG/LT振り分け。取得日 2026-09-23。

confidence:
- LT搭載/名称/導入日/型式/基本フロー: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- ATTACK成功率/決戦BIG成功率/右確率/転落率/振り分け: ANALYSIS_HIGH（複数一致）
- 通常遊技全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常遊技全体を分母にした直接公表の総LT到達率/確率

conflicts: []
