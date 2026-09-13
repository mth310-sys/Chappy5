# LモンキーターンV

recordNo: 1609
machineName: LモンキーターンV
aliases: スマスロモンキーターンV / スマスロモンキーターンⅤ / モンキーターン5
manufacturer: 山佐（製造） / 山佐ネクスト（総発売元）
formalModel: Lモンキーターン5CE
inspectionCode: 3S0772
releaseDate: 2023-12-04
generation: 6.5号機 / スマスロ
systemType: AT / 周期抽選 + CZ + シナリオ管理AT
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 山佐ネクストの導入促進キャンペーンを報じた遊技日本/P-WORLD、Amusement Japan、P-BOMBで2023-12-04ホール導入を確認。
- 製造元は山佐、総発売元は山佐ネクストと業界資料で確認。
- 正式型式 `Lモンキーターン5CE`、検定番号 `3S0772` は機種整理資料で確認。検定番号の公的一次本文による再照合は今回未取得のため番号単独は `ANALYSIS_SINGLE`。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / INSPECTION_CODE_ANALYSIS_SINGLE

## payoutRateBySetting
| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 98.9% |
| 4 | 104.5% |
| 5 | 110.2% |
| 6 | 114.9% |

Amusement Japan、必勝本、一撃、なな徹系解析で一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
| 設定 | AT初当り |
|---|---:|
| 1 | 1/299.8 |
| 2 | 1/295.5 |
| 4 | 1/258.8 |
| 5 | 1/235.7 |
| 6 | 1/222.9 |

複数資料で一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32G/50枚。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「SG RUSH」: 約2.5枚/G。
- 上位AT「青島SG」: 約4.0枚/G。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- SG RUSH: 1セット40G+α（周回パート31G+α + SGレース9Gの構成）。
- シナリオ管理型AT。8セット継続後のグランドスラムから上位契機へ接続。
- 青島SG: 純増約4.0枚/G、継続期待度約83%とする解析資料あり。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時ゲーム数天井: 795G+αでAT。
- 周期天井: 最大6周期でAT。
- 通常モードはモードA / モードB / 天国。モードBは最大3周期、天国は1周期。
- CZ「超抜チャレンジ」は通常時レア役等から移行し、成功でAT。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、通常時ゲーム数、ゲーム数天井、周期数/周期天井、激走ポイント、内部状態、内部モードをRESET/再抽選。
- 朝一はピット周辺ステージ開始。
- 設定変更後は非有利区間が最低2G以上継続し、その間はレア小役成立時に専用のモード移行抽選が行われる。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は通常時ゲーム数、ゲーム数天井、周期数/周期天井、激走ポイント、内部状態、内部モード、有利区間をCARRY_OVER。
- 液晶上はゲーム数0G、激走ポイント0pt、1周期目表示となるため見た目では引継ぎが隠される。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみでは天井ゲーム数、天井周期、通常時ゲーム数、内部状態、内部モード、有利区間をCARRY_OVER。
- 朝一表示は0G、開始ステージはピット周辺で設定変更時と同様。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更時: 通常時ゲーム数・天井ゲーム数・周期数をRESET。
- 据え置き/純電源OFF→ON: 内部値CARRY_OVER（表示上は0G/1周期目）。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 通常795G+α → 設定変更後495G+αへ短縮。
- 通常最大6周期 → 設定変更後最大4周期へ短縮。
- 激走チャージ間天井も設定変更後81G+αへ短縮とする解析資料あり。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は内部モードを再抽選。
- 非有利区間中の弱レア小役成立時はモードB以上濃厚、強レア小役成立時は天国濃厚。
- 設定変更時のモードA/B/天国それぞれの初期振り分け率は、機種名/型式/「設定変更 モード振り分け」「朝一 モードA B 天国」「リセット モード移行率」でメーカー・主要解析・旧DB系を再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_INITIAL_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き/純電源OFF→ONは内部状態CARRY_OVER。
- 朝一設定変更専用の通常/高確等の具体的初期振り分け率は再探索後も公開固定値未確認。
信頼度: ANALYSIS_HIGH_FOR_RESET_CARRY / UNVERIFIED_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 設定変更後の非有利区間が最低2G以上継続し、その間に固有恩恵抽選が存在することをなな徹/一撃系資料で確認。
信頼度: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井が795G+αから495G+αへ300G短縮。
- 周期天井が最大6周期から4周期へ短縮。
- 激走チャージ間天井は81G+αへ短縮。
- 設定変更後のAT初当りまでの出玉率は「100%超」とする複数攻略資料あり。ただし攻略期待値であり内部性能値とは分離。
- 非有利区間中、弱レア小役成立でモードB以上濃厚、強レア小役成立で天国濃厚、究極目成立で青島SPフリーズ濃厚。
信頼度: ANALYSIS_HIGH

### resetPenalties
- 設定変更時のみ適用される定量的な不利要素は、メーカー・業界・主要解析・旧DB/回顧資料を検索語変更して再探索したが確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- 設定変更/据え置きとも朝一はピット周辺、液晶ゲーム数0G、激走ポイント0pt、1周期目表示となるため見た目だけでは判別困難。
- 朝一1周期目の優出モードが111ptまたは222pt以外から始まれば据え置き濃厚材料。111/222ptならリセット期待度が高い。
- リセット後の天井495G+α・4周期短縮が否定された場合は据え置き濃厚材料。
- 朝一非有利区間中の弱レア小役後に3周期以内AT非当選、強レア小役後に1周期目AT非当選、究極目後に青島SPフリーズ非発生なら据え置き濃厚材料。
- 本機固有のリールガックンについては検索語を変え、解析・立ち回り・回顧資料まで再探索したが確度の高い機種固有条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的なガックン論は採用しない。
信頼度: ANALYSIS_HIGH_FOR_POINT/CEILING/RARE-ROLE_DETECTION / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
- リセットゲーム数天井: 495G+α。
- リセット周期天井: 最大4周期。
- リセット激走チャージ間天井: 81G+α。
- 設定変更直後の非有利区間: 最低2G以上。
- 非有利区間中 弱レア小役: モードB以上濃厚。
- 非有利区間中 強レア小役: 天国濃厚。
- 非有利区間中 究極目: 青島SPフリーズ濃厚。

### publicMorningNumbers
- 朝一ゲーム数天井: 495G+α。
- 朝一周期天井: 4周期。
- 激走チャージ間天井: 81G+α。
- 朝一設定変更後AT初当りまでの出玉率: 100%超とする攻略資料あり（期待値評価であり内部抽選固定値ではない）。
- モードA/B/天国の設定変更初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 内部状態初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## groupAudit
- 業界資料と複数機種DBで2023-12-04導入を確認。
- 最新handoffの2023-12-04 canonical 7機監査を継承し、本機を5機目として処理。
- 群進捗: OPEN 5/7 canonical processed。
- 次は `Lマジカルハロウィン8` をNo.1610候補として処理する。
- `パチスロ琉神－30 スイカバージョン` は通常全国導入日と一部地域テスト導入日の資料差があるため、同日canonical群へ即時混入しない。

## conflicts
- 一部導入前/まとめ資料に天井759G+α、設定6 AT初当り1/223.9の誤記/旧表記が見られる。複数の主要解析・業界資料で一致する795G+α、1/222.9をcanonical採用し、旧表記は採用しない。
- 検定番号 `3S0772` は機種整理資料で確認したが公的一次本文照合未取得のため信頼度を分離。

## missingFields
- setting-change initial mode A/B/heaven exact distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- setting-change internal-state exact distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary cross-check: UNVERIFIED_PRIMARY_SOURCE

## sources
取得日: 2026-09-13
- 山佐ネクスト導入告知（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/26095/nippon
- Amusement Japan 導入告知: https://amusement-japan.co.jp/article/detail/10003970/
- P-BOMB 導入告知: https://p-bomb.co.jp/industry/maker/8221/
- グリーンべると 発表: https://web-greenbelt.jp/post-76017/
- Amusement Japan スペック再掲: https://amusement-japan.co.jp/article/detail/10004754/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4185/1/98126
- 必勝本 システム: https://p.hisshobon.jp/vpage/2572/4
- 一撃 天井/朝一/電源OFF→ON: https://1geki.jp/slot/l_monkeyturn5/3/
- 一撃 基本/解析: https://1geki.jp/slot/l_monkeyturn5/
- なな徹 朝一・設定変更・判別: https://nana-press.com/kaiseki/machine/644/18025/
- なな徹 モード: https://nana-press.com/kaiseki/machine/644/18217/
- なな徹 総合: https://nana-press.com/kaiseki/machine/644/
- ぽこすろっと 朝一/天井: https://www.nankaikoya.jp/monkeyturn5-kitaichi/
- 機種整理資料（型式/検定番号）: https://ativo.jp/2023/10/02/%EF%BD%8C%E3%83%A2%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%B3v/

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED
- confidence: INDUSTRY_HIGH / ANALYSIS_HIGH with isolated UNVERIFIED fields above
