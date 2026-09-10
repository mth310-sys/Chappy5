# No.1241 パチスロらんま1/2

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロらんま1/2
- manufacturer: EXCITE（ニューギン系列）
- releaseDateCanonical: 2018-11-05
- generation: 5.9号機
- systemType: ART / 擬似ボーナス / CZ
- formalModelName: `パチスロらんま1/2W`
- certificationNumber: `8S0007`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- K-Navi、P-WORLD、DMMぱちタウン、すろぱちくえすと、パチ7が2018-11-05導入で一致。
- ちょんぼりすたは2018-11-12と掲載しているため平均せずCONFLICT保持。
- canonicalは複数資料で一致する2018-11-05。
- confidence: `ANALYSIS_HIGH_MULTIPLE_CROSSCHECKED_WITH_DATE_CONFLICT`。

## identificationEvidence
- P-WORLDは型式名 `パチスロらんま1/2W`、検定番号 `8S0007`、メーカーEXCITEを掲載。
- DMMぱちタウンも型式名 `パチスロらんま1/2W`、メーカーEXCITEを掲載。
- 日刊スポーツ、Amusement Japan、PiDEAの当時業界記事でニューギン発表機・EXCITE製として確認。
- 2013年SANKYO版「パチスロらんま1/2」は別機種のため混同しない。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.8% |
| 3 | 100.6% |
| 4 | 102.5% |
| 5 | 104.3% |
| 6 | 106.3% |

- すろぱちくえすと、ちょんぼりすた、DMMぱちタウン/P-WORLD系情報で整合。

### initialHitBySetting
主要初当たりはART「乱馬/らんまフェスティバル」突入率（擬似ボーナス初当たり）として保持。

| 設定 | ART/擬似ボーナス初当たり | らんまちゃんす(CZ1) | 無差別格闘チャレンジ(CZ2) | CZ合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/516.5 | 1/395.7 | 1/323.7 | 1/178.1 |
| 2 | 1/515.5 | 1/396.7 | 1/324.1 | 1/178.4 |
| 3 | 1/514.8 | 1/398.1 | 1/325.0 | 1/178.9 |
| 4 | 1/514.5 | 1/398.9 | 1/326.2 | 1/179.4 |
| 5 | 1/514.1 | 1/399.9 | 1/326.4 | 1/179.7 |
| 6 | 1/512.9 | 1/402.1 | 1/328.0 | 1/180.6 |

- P-WORLD、すろぱちくえすと、ちょんぼりすたで一致。

### baseGamesPer50
- 設定別・MB消化G込み解析値: **47.4 / 48.4 / 49.8 / 51.4 / 53.0 / 54.9G/50枚**（設定1〜6）。すろぱちくえすと設定判別記事。
- ちょんぼりすたは代表値 **50.7G/50枚**。
- すろぱちくえすと機種トップ初期記載は **約49G/50枚**。
- 定義・更新時期差があるため平均せず、設定別47.4〜54.9Gを最も情報量の高いcanonical値として保持し、50.7G/約49Gは補助値として分離。

### netIncrease
- ART純増: **約1.7枚/G**。
- 日刊スポーツ当時業界記事、P-WORLD、K-Navi、パチマガスロマガ、すろぱちくえすと、ちょんぼりすたで一致。

### basicPayout
- 擬似ボーナス「乱馬BONUS / らんまBONUS」: **20G**。
- 熊猫的衝撃（パンダインパクト）: **20G**。
- いずれもART純増約1.7枚/Gベースで、固定獲得枚数型のリアルボーナスではない。
- メインART「乱馬/らんまフェスティバル」は規定G数不定。初当たり時の乱馬フェスティバルは20G保障。

### ceiling
- 天井: `NONE / NOT_EQUIPPED`。
- すろぱちくえすと、ちょんぼりすた、パチ7で一致。

## modeSpecificMinimumData
- 通常時はCZ「らんまちゃんす」「無差別格闘チャレンジ」からART当選を目指す。
- ART当選時は原則20G擬似ボーナスから開始し、その後「乱馬/らんまフェスティバル」へ移行。
- ART中はART-CZ「無差別格闘チャレンジ」と擬似ボーナスをループさせる構造。
- ART-CZ突入抽選はART中約1/5.8。
- CZ期待度の代表値は、らんまちゃんす約25%、通常時無差別格闘チャレンジ約40%。
- 完全再現用の全小役別抽選・CZ内部全振り分けは対象外。

## resetBehavior
### settingChangeBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一リセット表では設定変更時の内部状態・ステージとも「調査中」。
- 機種名/型式名/EXCITE/ニューギンと「設定変更」「リセット」「朝一」「内部状態」「ステージ」「有利区間」「初期状態」を組み替えて、P-WORLD / K-Navi / パチマガスロマガ / すろぱちくえすと / パチ7 / 当時業界記事を再探索したが、本機固有の確定契約を固定できず推測しない。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 通常G数天井は非搭載のため天井G数持越しはN/A。
- 据え置き時に前日の通常高確/CZ前兆/ART関連内部状態をどう保持するかを、純電源OFF→ONから分離した本機固有公開資料は今回固定できず。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたでは電源OFF→ON時の内部状態・ステージも「調査中」。
- 「電源OFF ON」「電断」「復帰」「据え置き」「ART状態」「ステージ」を再探索したが、確定値なし。

### gameCounterReset
- `NOT_APPLICABLE_NO_NORMAL_CEILING_COUNTER`。
- 通常ゲーム数天井非搭載。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- リセット短縮天井なし。

### modeAfterReset
- 設定変更時の朝一専用モード/振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時には高確状態（砂浜ステージ等）があるが、設定変更時の再抽選・引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 通常高確/CZ前兆/ART状態の設定変更・純電断時処理: `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用高確やリセット限定初当たり優遇状態: `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `APPLICABLE_5_9_ART_BUT_RESET_CONTRACT_UNVERIFIED_AFTER_RESEARCH`。
- 本機は5.9号機ART機だが、設定変更/据え置き/純電断ごとの本機固有の有利区間朝一処理を直接示す資料を今回固定できなかったため、一般規則から個別仕様を補完しない。

### resetBenefits
- `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井短縮、朝一専用モード、リセット専用ART/CZ当選率優遇などの本機固有公開恩恵は確認できず。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のリールガックン、初期出目、ステージ固定、ランプ状態等による設定変更/据え置き判別の確定条件・発生率を再探索したが固定できず。

### numericResetData
- normalCeiling: `NONE`。
- resetSpecificCeiling: `NOT_APPLICABLE`。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。
- reelGakkunRate: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 導入日: K-Navi / P-WORLD / DMMぱちタウン / すろぱちくえすと / パチ7は **2018-11-05**、ちょんぼりすたは **2018-11-12**。`CONFLICT_RELEASE_DATE_2018_11_05_VS_2018_11_12`。複数一致の11/5をcanonical。
- 50枚ベース: 設定別 **47.4〜54.9G/50枚（MB消化G込み）**、代表 **50.7G/50枚**、初期記事 **約49G/50枚** が併存。平均せず `SOURCE_DEFINITION_UPDATE_DIFFERENCE_BASE_GAMES_PER_50` として定義分離。

## missingFields
- 設定変更時の内部状態/ステージ/ART状態の確定契約。
- 据え置き時を純電断から分離した内部状態契約。
- 純電源OFF→ON時の内部状態/ステージ/ART状態契約。
- 有利区間の本機固有朝一処理。
- 本機固有ガックン等の変更判別条件・発生率。
- リセット固有の公開朝一数値。

## sources
取得日: 2026-09-10

1. 日刊スポーツ「ニューギンが2機種同時発表」 — https://www.nikkansports.com/m/amusement/pachislot/news/amp/201809260000694.html
   - 2018-09-26。当時内覧会、パチスロらんま1/2、純増約1.7枚/G、擬似ボーナス20G、メインART構造。
   - reliability: INDUSTRY_CONTEMPORARY
2. Amusement Japan「誰も見たことのない深紅のゴジラ」 — https://amusement-japan.co.jp/article/detail/10000829/
   - 2018-09-27。ニューギン内覧会で本機を確認。
   - reliability: INDUSTRY_CONTEMPORARY
3. PiDEA X「P『ゴジラ』S『らんま1/2』をお披露目／ニューギン」 — https://www.pidea.jp/articles/P%E3%80%8C%E3%82%B4%E3%82%B8%E3%83%A9%E3%80%8DS%E3%80%8C%E3%82%89%E3%82%93%E3%81%BE1%2F2%E3%80%8D%E3%82%92%E3%81%8A%E6%8A%AB%E9%9C%B2%E7%9B%AE%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
   - 2018-10-03。EXCITE製新機種として確認。
   - reliability: INDUSTRY_CONTEMPORARY
4. P-WORLD「パチスロらんま1/2W」 — https://www.p-world.co.jp/machine/database/8770
   - 型式 `パチスロらんま1/2W`、検定番号8S0007、EXCITE、ART純増約1.7枚/G、ART/CZ確率、擬似ボーナス20G等。
   - reliability: ANALYSIS_HIGH_DATABASE
5. K-Navi「パチスロらんま1/2」 — https://p-kn.com/slot/3101/
   - 2018-11-05、ART、純増約1.7枚/G、20G擬似ボーナス。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと「らんま1/2 スロット｜解析」 — https://www.slopachi-quest.com/article/ranma/
   - 2018-11-05、設定別ART初当たり/機械割、約49G/50枚、純増約1.7枚/G、天井なし。
   - reliability: ANALYSIS_HIGH
7. すろぱちくえすと「設定判別」 — https://www.slopachi-quest.com/article/ranma-settei/
   - 設定別ART初当たり/機械割、設定別47.4〜54.9G/50枚（MB消化G込み）、CZ確率。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた「らんま1/2」 — https://chonborista.com/slot/newgin-slot/66328/
   - 2018-11-12表記、50.7G/50枚、設定別ART/CZ/出玉率、天井非搭載、朝一設定変更/電源OFF→ONの内部状態・ステージは調査中。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ「パチスロらんま1/2」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/09/a.php
   - EXCITE/2018年11月、純増1.7枚/G、擬似ボーナスART機。
   - reliability: ANALYSIS_HIGH_OLD_DATABASE
10. パチ7「パチスロらんま1/2」 — https://pachiseven.jp/machines/5570/cutout/13
   - 2018-11-05、EXCITE、ART、天井機能なし。
   - reliability: ANALYSIS_HIGH
11. DMMぱちタウン「パチスロらんま1/2」 — https://p-town.dmm.com/machines/3262/recommend
   - 型式パチスロらんま1/2W、EXCITE、2018-11-05、機械割97.3〜106.3%。
   - reliability: ANALYSIS_HIGH_DATABASE
