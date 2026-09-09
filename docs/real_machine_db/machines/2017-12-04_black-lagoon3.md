# No.1161 BLACK LAGOON3

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: BLACK LAGOON3
- manufacturer: 七匠
- releaseDateCanonical: 2017-12-04
- generation: 5.9号機（5号機）
- systemType: A+ART
- formalModelName: `パチスロブラックラグーンリミットブレイクT`（複数中古/解析系で一致、一次検定資料未固定）
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- collectedAt: 2026-09-10

## releaseDateEvidence
- PiDEA X（2017-10-24）は七匠製「BLACK LAGOON3」の納品日2017-12-03、導入日2017-12-04を明記。
- K-Naviはホール導入開始2017-12-04。
- 期待値見える化、当時解析資料も2017-12-04で一致。
- 本DBでは複数当時系資料一致から2017-12-04をcanonicalとする。

## performanceCore

### payoutRateBySetting
- setting1: 97.44%
- setting2: 98.91%
- setting3: 100.60%
- setting4: 103.98%
- setting5: 107.13%
- setting6: 112.32%

### bigBonusBySetting
- setting1: 1/485.45
- setting2: 1/451.97
- setting3: 1/422.81
- setting4: 1/366.12
- setting5: 1/316.60
- setting6: 1/283.71

### regularBonus
- canonical: 約1/550.72（設定差なしとして掲載する当時資料系統を採用）。
- K-Naviも設定1〜6で概ね1/551表記。

### artInitialHitBySetting
- setting1: 1/599.18
- setting2: 1/593.58
- setting3: 1/589.07
- setting4: 1/571.85
- setting5: 1/555.62
- setting6: 1/541.06

### baseGamesPer50
- 約34G/50枚

### netIncrease
- ART単体: 約1.4枚/G
- ボーナス込みART純増: 約1.9枚/G
- 定義差のため両方を分離保存。

### basicPayout
- SUPER BIG（青7）: 約256枚
- NORMAL BIG（赤7）: 約152枚
- REG: 約56枚
- ART「ギャングスタパラダイス」: 1セット50G+α

### ceiling
- `NONE`。ゲーム数天井非搭載。
- 5.9号機の有利区間上限は通常のゲーム数天井とは別契約として扱う。

## modeSpecificMinimumData
- 通常時はレア役等から有利区間「スカルシステム」、CZ「ギャングスタバトル」、ボーナス等を経由してARTを目指すA+ART。
- CZ「ギャングスタバトル」は15G+α、ART期待度約40%。
- ART「ギャングスタパラダイス」は50G+α、純増約1.4枚/G（ボーナス込み約1.9枚/G）。
- 5.9号機のため有利区間1500G上限が存在し、到達時はエンディング経由で終了する設計。
- 完全再現用の小役別抽選、CZ内部抽選、上乗せ詳細は本DB対象外。

## resetBehavior

### settingChangeBehavior
- 設定変更時は有利区間を終了し `非有利区間` へ。
- RT状態はボーナス終了後と同等の `RT0` へ移行。
- パチ＆スロ必勝本では内部状態は `高確へ` と明記。
- 開始ステージは市街地ステージ。
- 下パネル画像は再抽選。

### carryOverBehavior
- 据え置き時は有利区間を含む状態を引き継ぐ。
- 有利区間中の純電源OFF→ONでは、レバーON時に有利区間状態へ復帰するとの当時解析あり。
- ゲーム数天井は非搭載のため天井G数持越しは `NOT_APPLICABLE`。

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは有利区間・RT状態・内部状態を引き継ぐ。
- パチ＆スロ必勝本では有利区間ランプ点灯も引き継ぐと明記。
- 下パネル画像は電源OFF→ONでも再抽選。
- ステージについては必勝本が「引き継ぐ」、別解析は朝一実戦上「市街地」とするため、reset/power-cycleの定義差に注意し両記載を平均化しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`
- 設定変更専用の短縮天井なし。

### modeAfterReset
- ゲーム数解除モードは非搭載。
- 設定変更時は有利区間をリセットし非有利区間から開始。
- 朝一専用のゲーム数モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: 高確（必勝本） + RT0（ボーナス終了後と同等のRT状態）。「内部高確」と「RT状態」は別軸として両方保持。
- carryOver / purePowerCycle: 前日の内部状態・RT状態を引き継ぐ。

### advantageousSectionReset
- settingChange: `RESET_TO_NON_ADVANTAGEOUS_SECTION`
- carryOver: `CARRYOVER_IF_ADVANTAGEOUS_SECTION_ACTIVE`
- purePowerCycle: `CARRYOVER_WITH_LAMP_IF_ACTIVE`
- 有利区間ランプはクレジット表示付近の★ランプ。前日有利区間中に閉店した無対策台では朝一点灯なら据え置き濃厚、消灯なら設定変更濃厚となる。

### resetBenefits
- 設定変更後は内部高確スタートとの当時解析があり、朝一の主要恩恵として保存。
- RT0スタートのため、RT状態の推移から据え置き/変更推測に使えるケースがある。
- 下パネル「ラグーン商会」の出現率が設定変更時50.00%に上がるため、変更可能性の補助示唆となる。

### resetPenalties
- ゲーム数天井非搭載のため、リセットで前日ハマリ天井を消す不利益は `NOT_APPLICABLE`。
- 設定変更固有のその他主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ガックンは据え置き・設定変更の双方で発生するとの当時解析があり、ガックン単独では判別不可。
- 前日有利区間中閉店かつ店側対策なしという条件では、有利区間ランプ点灯継続=据え置き濃厚、消灯=設定変更濃厚。
- RT0はリプレイB成立の2/3でRT2（バラライカ）へ移行。ベルこぼし前に通常ステージへ落ちた場合は据え置き濃厚とする当時攻略情報があるため補助判別として保存。
- 朝一下パネルは設定変更時と電源OFF→ON時で振り分けが異なるが、確定判別ではない。

### numericResetData
- lowerPanelAfterSettingChange:
  - レヴィ: 50.00%
  - ラグーン商会: 50.00%
- lowerPanelAfterPowerCycle:
  - レヴィ: 68.75%
  - ラグーン商会: 31.25%
- resetInternalState: 高確（振り分け率の公開値は今回固定せず）
- resetRTState: RT0 100%として扱う当時解析契約
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunUsefulness: `NOT_USABLE_BOTH_RESET_AND_CARRYOVER_CAN_GAKKUN`

## conflicts
- powerCycle時ステージについて、必勝本は「引き継ぐ」、別解析は朝一実戦上市街地ステージと記載。条件・観測定義差の可能性があるため `CONFLICT_OR_CONDITION_DIFFERENCE_POWER_CYCLE_STAGE` として両方保持。
- 純増はART単体約1.4枚/G、ボーナス込み約1.9枚/G。数値競合ではなく定義差。
- formalModelName `パチスロブラックラグーンリミットブレイクT` は複数の中古実機/解析資料で一致するが、公的検定一次資料を今回固定できていないため confidence を上げ過ぎない。

## sources
取得日: 2026-09-10

1. PiDEA X — 最新作「BLACK LAGOON3」七匠から登場／フィールズ
   - https://www.pidea.jp/articles/%E6%9C%80%E6%96%B0%E4%BD%9C%E3%80%8CBLACK%20LAGOON3%E3%80%8D%E4%B8%83%E5%8C%A0%E3%81%8B%E3%82%89%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%82%BA
   - 七匠製、A+ART、ボーナス256/152/56枚、ART純増約1.4枚/G（ボーナス込み約1.9枚/G）、50G+α、納品12/3・導入12/4。
   - confidence: `INDUSTRY`

2. P-WORLD 業界ニュース / グリーンべると — 5.9号機で「バレ満」の興奮再び
   - https://news.p-world.co.jp/articles/9729/greenbelt
   - 七匠、5.9号機A+ART、純増1.9枚/G（ボーナス込み）、1セット50G+α。
   - confidence: `INDUSTRY`

3. K-Navi — BLACK LAGOON3
   - https://p-kn.com/slot/2912/
   - 導入2017-12-04、設定別BIG/ART等。
   - confidence: `ANALYSIS_HIGH`

4. 期待値見える化 — ブラックラグーン3 有利区間ランプ・朝一リセット・スペック解析
   - https://slotjin.com/slot/blacklagoon3/
   - 設定別BIG/ART/機械割、約34G/50枚、天井なし、設定変更時非有利区間/RT0、電断時引継ぎ、下パネル振り分け、有利区間ランプ判別。
   - confidence: `ANALYSIS_HIGH`

5. パチ＆スロ必勝本 — 天井&設定変更[ブラックラグーン3]
   - https://p.hisshobon.jp/machine/3075/1/67171
   - 天井なし。設定変更時は非有利区間・高確・市街地、電源OFF/ONは有利区間/状態/ステージを引継ぎ、有利区間ランプ点灯も引継ぎ。
   - confidence: `ANALYSIS_HIGH`

6. すろぱちくえすと — ブラックラグーン3
   - https://www.slopachi-quest.com/article/black-ragoon3/
   - 設定変更RT0、据え置きは有利区間含め全引継ぎ、ガックン判別不可、RT推移による補助判別、下パネル変更/電断振り分け。
   - confidence: `ANALYSIS_HIGH`

7. パチマガスロマガ — ブラックラグーン3 下パネル画面
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/08/en01.php
   - 朝一パネル振り分け: 電断68.75/31.25、設定変更50/50。
   - confidence: `ANALYSIS_HIGH`

8. P-WORLD — パチスロ BLACK LAGOON3
   - https://www.p-world.co.jp/machine/database/8525
   - 七匠、ボーナス約256/152/56枚、ART50G+α、CZ期待度約40%、A+ART基本構造。
   - confidence: `INDUSTRY`

9. スロパチネット / 旧解析資料 — ブラックラグーン3
   - https://slopachi-net.com/blacklagoon3
   - 型式名`パチスロブラックラグーンリミットブレイクT`、A+ART、ボーナス仕様。
   - confidence: `ANALYSIS_SINGLE`

10. slotnews777 — ブラックラグーン3 天井・スペック・解析
    - https://slotnews777.blog.fc2.com/blog-entry-3508.html
    - 型式名`ブラックラグーンリミットブレイクT`を独立確認。
    - confidence: `RETROSPECTIVE_SINGLE`

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- officialOrPublicPrimaryFormalModelRecord: `UNVERIFIED_AFTER_RESEARCH`
- exactProbabilityOfResetHighState: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleStageConditionResolution: `CONFLICT_OR_CONDITION_DIFFERENCE`

## researchNotes
- `BLACK LAGOON3 / ブラックラグーン3 / ブラックラグーンリミットブレイク / パチスロブラックラグーンリミットブレイクT / 七匠 / NANASHOW`を使用。
- 「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「電断」「天井」「RT0」「高確」「有利区間」「有利区間ランプ」「ガックン」「下パネル」「型式」「検定番号」「7S」を組み替えて再探索。
- 業界記事、当時解析、P-WORLD、K-Navi、パチマガスロマガ、必勝本、中古/回顧資料を横断。
- 検定番号は十分な再探索後も直接固定できず、型式名から推測生成していない。
- 5.9号機有利区間上限と通常のゲーム数天井を混同しない。
