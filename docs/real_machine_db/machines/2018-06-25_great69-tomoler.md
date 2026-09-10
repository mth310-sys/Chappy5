# No.1205 グレート69～TOMOLER～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: グレート69～TOMOLER～
- manufacturer: バルテック
- releaseDateCanonical: 2018-06-25
- generation: 5.9号機 / 5号機
- systemType: ノーマル / Aタイプ / 完全告知 / PB（パールショップともえグループ限定）
- formalModelName: `グレート69／AA`
- certificationNumber: `8S0013`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE DATA、すろぱちくえすと、パチ7で2018-06-25導入が一致。
- 当時/回顧資料では、関東圏のパールショップともえグループPB機として6月25日から稼働開始・順次導入とされる。
- 全国一般販売機ではなく系列限定PB機だが、正式型式名・検定番号を持つ実在パチスロ機のため全機種方針に従い独立収録。
- releaseDate confidence: `ANALYSIS_HIGH`。

## performanceCore

### payoutRateBySetting
- setting1: 98.1%
- setting2: 98.7%
- setting3: 100.0%
- setting4: 102.8%
- setting5: 106.0%
- setting6: 110.4%

### initialHitBySetting
BIG:
- setting1: 1/268.59
- setting2: 1/267.49
- setting3: 1/266.41
- setting4: 1/259.04
- setting5: 1/249.19
- setting6: 1/230.76

REG:
- setting1: 1/407.06
- setting2: 1/394.80
- setting3: 1/358.12
- setting4: 1/316.60
- setting5: 1/271.93
- setting6: 1/250.14

ボーナス合算:
- setting1: 1/161.82
- setting2: 1/159.45
- setting3: 1/152.76
- setting4: 1/142.47
- setting5: 1/130.03
- setting6: 1/120.03

パチマガスロマガ、HAZUSE、P-WORLD、すろぱちくえすとで主要確率・機械割が一致。

### baseGamesPer50
- setting1: 34.2G
- setting2: 34.3G
- setting3: 34.6G
- setting4: 35.1G
- setting5: 35.2G
- setting6: 35.7G
- HAZUSE/すろぱちくえすとの代表表記: 約34G/50枚。

### netIncrease
- `NOT_APPLICABLE`（AT/ART/RTによる純増型ではないノーマルタイプ）。

### basicPayout
- BIG: 最大約312枚（345枚を超える払い出しで終了）
- REG: 最大約104枚（105枚を超える払い出しで終了）

### ceiling
- 天井: **非搭載**。

## modeSpecificMinimumData
- リール左下の「TOMOEチャンスランプ」点灯でボーナス確定の完全告知。
- 告知タイミングは先告知25% / 後告知75%と公開。
- BIG中BGMは当選ゲーム数、100G以内のBIG連続回数などの条件で変化し、前日状態を把握している場合は据え置き推測へ利用可能。

## resetBehavior

### settingChangeBehavior
- 朝一1G目のリールガックンは、対策されていない場合に設定変更濃厚/可能性上昇とする当時解析がある。
- BIG中BGMの前日履歴依存パターンとの比較から設定変更/据え置き推測が可能とされる。
- 設定変更時に内部ボーナス連続回数・当選G数履歴が具体的にどの単位で初期化されるかを明記した本機固有契約は、表記揺れ・型式名・メーカー名を含め再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 当日1・2回目のBIGで「パイナップルラグ」「Theエンターテイナー」「威風堂々」が流れた場合、またはゾロ目G数以外のBIGで「Theイージーウィナーズ」が流れた場合を据え置き濃厚とする当時解析あり。
- したがって、前日からのBIG連続回数/ゲーム数条件に由来する履歴が据え置き判別材料になることは確認。
- ただし内部カウンタの正式な保持単位・初期化契約は公開資料で固定できず、詳細は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 設定を変更しない純電源OFF→ONのみの場合について、BGM履歴・リール初期状態・成立済みボーナス等を明示した本機固有契約は、検索語を「電源/電源OFF ON/据え置き/リセット/BGM/ガックン」へ変更し、当時解析・旧DB・回顧系を横断したが直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため、天井ゲーム数カウンタは `NOT_APPLICABLE`。
- BGM条件に利用される当選ゲーム数/連続BIG履歴の設定変更時詳細は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`。

### modeAfterReset
- 天井モード/ゲーム数解除モード: `NOT_APPLICABLE`。
- 朝一専用モード・設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- AT/ART/CZの通常時内部状態管理: `NOT_APPLICABLE`。
- 成立済みボーナス/告知状態など低レベル状態の設定変更・据え置き・純電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE`（完全告知ノーマルタイプで有利区間を性能軸として使用しない）。

### resetBenefits
- 短縮天井、朝一専用モード、設定変更専用の初当たり優遇/CZ優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 出玉上の直接恩恵ではないが、対策なしなら1G目ガックンを変更推測へ利用可能。

### resetPenalties
- 設定変更による短縮/延長天井や初当たり冷遇など定量的不利値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一1G目ガックン: 設定変更濃厚/可能性上昇。対策されていない場合に限るため確定判別ではない。
- 据え置き濃厚BGM:
  - 当日1・2回目BIGで「パイナップルラグ」「Theエンターテイナー」「威風堂々」。
  - ゾロ目G数以外のBIGで「Theイージーウィナーズ」。
- パチマガスロマガも「前日と同じ出目で朝イチにガックンすれば設定変更の可能性が高まる」としてガックン判別を支持。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND`
- morningFirstSpinGakkun: `CHANGE_INDICATION_IF_NOT_COUNTERMEASURED`
- carryOverBgmRule: `PUBLIC_CONDITION_CONFIRMED / NUMERIC_PROBABILITY_NOT_FOUND`

## morningRelatedPublicNumbers
- 設定変更専用のモード振り分け、特定G以内当選率、初当たり/CZ優遇率、ガックン発生率は再探索後も公開数値を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- BIG中BGM条件は公開されるが、設定変更/据え置き時の発生確率そのものは確認できず。

## conflicts
- 主要性能値について採用判断を左右する有意なCONFLICTは今回確認できず。
- PB機のため「全国一般導入」と誤読しないよう、導入範囲をパールショップともえグループ限定として分離保存。

## missingFields
- 純電源OFF→ONを据え置きから独立させた本機固有契約。
- 設定変更時のBGM関連内部履歴カウンタの正式な初期化単位。
- ガックン発生率/対策時挙動の公開定量値。
- 設定変更専用の朝一数値（公開確認できず）。

## sources
取得日: 2026-09-10

1. HAZUSE DATA — グレート69～TOMOLER～
   - https://hazuse.com/machine/pachislot/8S0013/
   - 型式名`グレート69／AA`、検定番号`8S0013`、2018-06-25、設定別BIG/REG/合算/機械割、約34G/50枚、払い出し条件。
   - confidence: `ANALYSIS_HIGH`
2. パチマガスロマガ — グレート69～TOMOLER～ ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/59/h.php
   - 設定別BIG/REG/合算/機械割。
   - confidence: `ANALYSIS_HIGH`
3. パチマガスロマガ — 小役確率/50枚あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/59/c.php
   - 設定別34.2/34.3/34.6/35.1/35.2/35.7G/50枚。
   - confidence: `ANALYSIS_HIGH`
4. パチマガスロマガ — 朝イチ・設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/59/rs.php
   - 前日同一出目+朝一ガックンによる変更推測。
   - confidence: `ANALYSIS_HIGH`
5. P-WORLD — グレート69～TOMOLER～
   - https://www.p-world.co.jp/machine/database/8689
   - ノーマル完全告知、設定別BIG/REG/合算/機械割、BIG約312枚/REG約104枚。
   - confidence: `ANALYSIS_HIGH`
6. すろぱちくえすと — 解析/基本スペック
   - https://www.slopachi-quest.com/article/great69-tomoler/
   - 2018-06-25、バルテック、PB機、約34G/50枚、最大312/104枚、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
7. すろぱちくえすと — 設定判別・リセット判別
   - https://www.slopachi-quest.com/article/tomoler-settei/
   - ガックン有効条件、設定変更濃厚パターン、据え置き濃厚BGM条件。
   - confidence: `ANALYSIS_HIGH`
8. パチ7 — BIG CHANCE
   - https://pachiseven.jp/machines/5496/cutout/6
   - 2018-06-25、ノーマル、天井なし、BIG払い出し条件。
   - confidence: `ANALYSIS_SINGLE`
9. P-Summa — PB機回顧
   - https://psumma.jp/trend/43451/
   - ともえグループPB、2018-06-25から順次導入、当時一撃公式告知の引用。
   - confidence: `ANALYSIS_SINGLE`
10. すろぱちくえすと — 2018年導入日順一覧
   - https://www.slopachi-quest.com/article/sindai-2018/
   - 2018-06-25欄はグレート69～TOMOLER～のみ掲載。
   - confidence: `ANALYSIS_HIGH`
