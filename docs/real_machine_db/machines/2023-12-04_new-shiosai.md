# ニューシオサイ

recordNo: 1607
machineName: ニューシオサイ
aliases: Sニューシオサイ / パチスロ ニューシオサイ / NEW SHIOSAI
manufacturer: ピーセカンド（製造元） / パイオニア（販売・ブランド）
formalModel: SニューシオサイSA
inspectionCode: 3S0331
releaseDate: 2023-12-04
generation: 6.5号機 / メダル機 / 25φ
systemType: A+RT / リアルボーナス + BIG後40G RT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パイオニア公式シオサイシリーズ一覧は「ニューシオサイ」をピーセカンド製、2023年12月限定先行導入として掲載。
- 遊技日本は2023-11-21記事で製造元ピーセカンド、型式 `SニューシオサイSA`、2023-12-04から限定先行導入予定と報道。
- グリーンべるとは最短導入日2023-12-04と報道。
- 一撃、必勝本、K-Navi、なな徹も2023-12-04導入で一致。
- 東京都公安委員会検定通過資料で `SニューシオサイSA / ピーセカンド / 3S0331` を確認。
信頼度: OFFICIAL / INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## payoutRateBySetting
| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 98.5% |
| 2 | 99.6% |
| 3 | 101.5% |
| 4 | 103.6% |
| 5 | 106.5% |
| 6 | 110.0% |

遊技日本、グリーンべると、一撃、必勝本、なな徹、P-WORLDで一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/280.1 | 1/546.1 | 1/185.1 |
| 2 | 1/274.2 | 1/537.2 | 1/181.5 |
| 3 | 1/264.3 | 1/500.3 | 1/172.9 |
| 4 | 1/253.0 | 1/474.9 | 1/165.1 |
| 5 | 1/237.4 | 1/442.8 | 1/154.6 |
| 6 | 1/222.9 | 1/409.6 | 1/144.4 |

遊技日本、必勝本、なな徹、一撃、P-WORLDで一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約36.2G/50枚、全設定共通。
- グリーンべると、一撃、なな徹、P-WORLDで一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- BIG後RT「シオサイゲーム」: 約0.3枚/G。
- RTは最大40G継続。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG: 最大239枚。
- REG: 最大95枚。
- BIG終了後は必ず40GのRT「シオサイゲーム」へ突入。
- ボーナス中は1度の技術介入で最大獲得枚数を狙える仕様。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 天井: 非搭載。
- CZ / AT: 非搭載。
- 朝一専用モード・規定Gモード: ゲーム性上の該当なし。
- RTはBIG後に突入する40G固定型で、パンク役入賞時は強制終了の可能性がある。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED_FOR_RT_STATE_AND_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 本機は天井非搭載のリアルボーナス+A+RT機で、AT機のような朝一規定G・天井・モード再抽選の公開仕様は確認されない。
- 設定変更時のBGM変化条件およびリールガックンについて、必勝本の機種別「設定変更・電源OFF/ON」比較表は双方とも「現在調査中」としており、確定挙動を公開していない。
- 設定変更時にRT内部状態をどう扱うかを直接明記した機種固有資料は、機種名・正式型式・メーカー名と「設定変更 / リセット / 朝一 / RT / BGM / ガックン」を組み替え、公式・業界・解析を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_RT_STATE

### carryOverBehavior
- 天井・規定ゲーム数・通常モードは非搭載のため、これらの据え置き引継ぎは `NOT_APPLICABLE`。
- 据え置き営業時のRT残G/RT内部状態について、機種固有の公開契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス当選確率自体は各設定固有のリアルボーナス確率であり、朝一用の別初当りテーブルは確認されない。
信頼度: NOT_APPLICABLE_FOR_CEILING_AND_MODE / UNVERIFIED_FOR_RT_STATE

### powerCycleBehavior
- 電源OFF→ONのみの場合のBGM変化条件・リールガックンは必勝本機種別表で「現在調査中」。
- 天井・規定G・通常モードは非搭載のため引継ぎ対象なし。
- 純電断時のRT残G/RT内部状態を直接記載した機種固有資料は十分な再探索後も確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH_FOR_RT_STATE_AND_REEL_BEHAVIOR

### gameCounterReset
- 天井ゲーム数・規定ゲーム数は非搭載のため `NOT_APPLICABLE`。
- 表示上ゲーム数の朝一挙動を変更判別へ利用する機種固有解析は確認できず、変更判別材料として採用しない。
信頼度: ANALYSIS_HIGH_FOR_NO_CEILING

### ceilingAfterReset
- 通常時天井自体が非搭載のため、リセット天井短縮は `NOT_APPLICABLE`。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZの通常A/B・天国等に相当する朝一モードは非搭載で `NOT_APPLICABLE`。
- 設定変更専用モード振り分け・朝一ゾーンの公開数値も確認されない。
信頼度: NOT_APPLICABLE

### stateAfterReset
- 朝一の高確/低確等、AT/CZ当選率を左右する内部状態の公開仕様は確認されず、ゲーム性上 `NOT_APPLICABLE` とする。
- 一方、BIG後RTの内部状態を設定変更/純電断時にどう処理するかは別論点であり、ここは推測せず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: NOT_APPLICABLE_FOR_NORMAL_STATE / UNVERIFIED_FOR_RT_STATE

### advantageousSectionReset
- 本機の公開ゲーム性はリアルボーナス+RTで、朝一狙いに影響する有利区間リセット恩恵・有利区間ランプ判別・有利区間由来の天井/モードは主要資料で確認されない。
- AT機の一般的な有利区間仕様を本機へ流用せず、ホール経営/朝一客AIに必要な公開挙動としては `NOT_APPLICABLE_TO_PUBLIC_MORNING_GAMEPLAY` とする。
信頼度: ANALYSIS_HIGH_FOR_GAME_SYSTEM / NO_MACHINE_SPECIFIC_MORNING_ADVANTAGEOUS_SECTION_DATA

### resetBenefits
- 設定変更専用の天井短縮、初当り優遇、朝一専用モード、CZ優遇などは、天井非搭載A+RTの本機について公開されていない。
- 後年整理資料でも「特筆すべき朝イチ優遇は非公表」とされるため、固定恩恵を推測追加しない。
信頼度: ANALYSIS_HIGH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetPenalties
- 設定変更時専用の定量的不利要素は、機種名/型式と「リセット 不利 / 朝一 デメリット / 設定変更」を組み替えて再探索したが確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- リールガックンおよびBGM変化条件は、必勝本の設定変更/電源OFF→ON比較表で双方「現在調査中」。
- 「ニューシオサイ / SニューシオサイSA / ピーセカンド / パイオニア / ガックン / リール初動 / BGM / 設定変更 / 電源OFF ON」で再探索しても、機種固有の確定判別条件・発生率を固定できなかったため `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため「朝一○Gを越えたら据え置き」型の天井判別は使用不可。
信頼度: ANALYSIS_SINGLE_FOR_EXPLICIT_UNDER_RESEARCH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 設定変更専用短縮天井: `NOT_APPLICABLE`。
- 設定変更専用モード振り分け: `NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND`。
- 公開された朝一固定優遇率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- リールガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers
- 朝一天井: なし。
- 朝一専用ゾーン/モード: 公開固定値なし。
- 設定変更専用初当り率: 公開固定値なし。通常の設定別BIG/REG確率を使用する機種として扱い、朝一だけ別確率とはしない。

## groupAudit
- パイオニア公式、遊技日本、グリーンべると、一撃、必勝本、K-Navi、なな徹で2023-12-04導入を確認。
- 前handoffの2023-12-04 canonical 7機監査を継承し、本機を3機目として処理。
- 群進捗: OPEN 3/7 canonical processed。
- 次は `L花の慶次～佐渡攻めの章` をNo.1608候補として処理する。
- `パチスロ琉神－30 スイカバージョン` の12/4通常全国導入 vs 12月/12/6一部地域テスト表記CONFLICTは継続し、本群へ即混入しない。

## conflicts
- 性能コアの主要値は確認した複数高信頼資料間で実質一致し、数値CONFLICTなし。
- 設定変更/電源OFF→ON時のBGM・ガックンは「挙動がない」のではなく、当時攻略資料が「現在調査中」と明示しているため、未確認と非該当を混同しない。

## missingFields
- setting-change RT-state handling: UNVERIFIED_AFTER_RESEARCH
- carry-over RT remaining-games/state handling: UNVERIFIED_AFTER_RESEARCH
- pure-power-cycle RT remaining-games/state handling: UNVERIFIED_AFTER_RESEARCH
- machine-specific reel gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- BGM change condition after setting change / power cycle: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- パイオニア公式 シオサイシリーズ一覧: https://www.slot-pioneer.co.jp/products/siosai.html
- 遊技日本 / P-WORLDニュース（販売発表・型式・スペック）: https://news.p-world.co.jp/articles/26070/nippon
- グリーンべると（限定先行導入・スペック）: https://web-greenbelt.jp/post-78388/
- 遊技通信（東京都公安委員会検定通過・型式/検定番号）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%889%E6%9C%8825%E6%97%A5%EF%BC%89/
- 一撃 機種解析: https://1geki.jp/slot/s_newsiosai_sa/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_newsiosai_sa/3/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/s_newsiosai_sa/39/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/82715/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/82713/
- なな徹 基本スペック: https://nana-press.com/kaiseki/machine/680/18133/
- なな徹 機種トップ: https://nana-press.com/kaiseki/machine/680/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9950
- K-Navi: https://p-kn.com/slot/4066/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/202402/
- pachinavi（後年整理・朝一固定優遇非公表）: https://pachinavi.net/machines/new-shiosai/
