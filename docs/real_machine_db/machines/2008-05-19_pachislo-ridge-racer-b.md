# パチスロ リッジレーサー

- machineName: パチスロ リッジレーサー
- manufacturer: ニイガタ電子精機
- modelName: パチスロリッジレーサーB
- brandUnit: インパルス（総発売元: パイオニア販売 / 開発支援: 山佐）
- releaseDate: 2008-05-19
- releaseDateDefinition: グリーンべると2008-04-25記事で「納品は5月19日からスタートする予定」、当時業界史でも型式 `パチスロリッジレーサーB` を2008/5/19発売と確認。
- releaseDateConfidence: INDUSTRY_EXACT_DATE_MULTI_SOURCE
- generation: 5号機初期
- systemType: ボーナス+RT（4リール/クアトロシステム）
- coreStatus: PARTIAL_WITH_PAYOUT_CONFLICT
- resetBehaviorQA: PARTIAL_VERIFIED_NO_SPECIAL_SETTING_CHANGE_NOTE
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

設定構成は `1 / 2 / 3 / 4 / 5 / 6`。

- パチマガスロマガ シミュレート値: `97.84 / 99.98 / 102.14 / 104.67 / 108.32 / 113.69%`
- 5号機クロニクル: `98.2 / 100.4 / 102.7 / 105.4 / 109.5 / 115.3%`
- パチスロ業界初まとめには設定6相当の別系列として `112.1%` の記録もある。
- 高設定域を中心に単純な丸めでは説明できないため平均せず `CONFLICT_PAYOUT_RATE` として各系列を保持する。

### initialHitBySetting

パチマガスロマガの設定別ボーナス確率。

- GOLD BONUS: `1/1560.38 / 1/1489.45 / 1/1394.38 / 1/1260.31 / 1/1129.93 / 1/963.76`
- SILVER BONUS: `1/963.76 / 1/897.75 / 1/873.81 / 1/862.32 / 1/819.20 / 1/771.01`
- BRONZE BONUS: `1/923.04 / 1/873.81 / 1/840.21 / 1/819.20 / 1/799.22 / 1/728.18`
- BIG合成: `1/362.08 / 1/341.33 / 1/327.68 / 1/315.08 / 1/297.89 / 1/269.70`
- REG: `1/675.63 / 1/704.69 / 1/728.18 / 1/780.19 / 1/840.21 / 1/949.80`
- 全ボーナス合成: `1/235.74 / 1/229.95 / 1/225.99 / 1/224.44 / 1/219.92 / 1/210.05`

### baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`
- `パチスロリッジレーサー / パチスロリッジレーサーB / リッジレーサー / ニイガタ電子精機 / インパルス` と `1000円あたり / 50枚 / コイン持ち / ベース / 小役確率` を組み替え、パチマガ小役ページ・当時攻略・旧DB・回顧資料を探索したが、今回比較用の直接値を確定できなかった。

### netIncrease

- RT「アタックタイム」: 約 `+0.5枚/G`
- GOLD BONUS後: 次回ボーナスまで
- SILVER BONUS後: 55G
- BRONZE BONUS後: 33G
- REG後: RTなし

### basicPayout

グリーンべるとおよびパチマガスロマガで整合する実獲得目安。

- GOLD BONUS: 約360枚（規定払い出し465枚超）
- SILVER BONUS: 約314枚（規定払い出し405枚超）
- BRONZE BONUS: 約200枚（規定払い出し255枚超）
- REG: 約81枚

### modeSpecificMinimumData

- 4リール・4ストップの「クアトロシステム」。4thリールの倍率で獲得枚数や同時当選期待度を変化させる設計。
- RT「アタックタイム」は約+0.5枚/G。
- GOLD後は次回ボーナスまで、SILVER後55G、BRONZE後33G。
- 通常ゲーム数天井は今回確認できず、パチマガの「攻め時・ヤメ時・設定変更時」も `特にナシ` と整理されている。

## resetBehavior

- settingChangeBehavior: `NO_SPECIAL_BEHAVIOR_NOTED_BY_ANALYSIS_SOURCE`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NONE_CONFIRMED_NO_RESET_SPECIFIC_MODE_IDENTIFIED`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_RT_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

### resetBehavior調査メモ

- `パチスロリッジレーサー / パチスロリッジレーサーB / リッジレーサー / ニイガタ電子精機 / インパルス / 山佐 / パイオニア販売` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / モード / ガックン / 初期出目 / RT / アタックタイム` を組み替えて探索。
- パチマガスロマガ現存機種インデックスは本機について `攻め時・ヤメ時・設定変更時→特にナシ` と明記している。このため設定変更時に公開攻略上の特別な朝一恩恵・短縮天井・専用モードがないことを示す直接資料として採用する。
- ただし「特にナシ」は、設定変更中にRT残状態を内部的に維持/消去するか、据え置き・電源OFF→ON時にRT残Gをどう扱うかまで個別に説明したものではない。これらは推測せず `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井、リセット短縮天井、設定変更専用モード、設定変更固有の朝一数値は十分な再探索後も確認できず `NONE_CONFIRMED`。
- ガックン、初期出目、ランプ等による本機固有の設定変更判別は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機初期のため `NOT_APPLICABLE`。

## 導入時期

- グリーンべると 2008-04-25: 納品は `2008-05-19` から開始予定。
- 当時業界史: 型式 `パチスロリッジレーサーB`、`2008/5/19発売`。
- P-WORLD/5号機クロニクルは2008年5月導入で整合。

## sources

取得日: 2026-09-01

1. グリーンべると「『倍率』採用の『パチスロ リッジレーサー』」2008-04-25
   - https://web-greenbelt.jp/00003559/
   - 2008-05-19納品開始予定、インパルス構成、4リール、各ボーナス獲得目安、RT仕様
   - confidence: INDUSTRY
2. パチマガスロマガ「パチスロリッジレーサー・ボーナス確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/h.php
   - GOLD/SILVER/BRONZE/REG設定別確率、合成、シミュレートPAYOUT
   - confidence: ANALYSIS_HIGH
3. パチマガスロマガ「パチスロリッジレーサー・基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/a.php
   - 各ボーナス規定払い出し/純増、4thリール方式
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ「パチスロリッジレーサー」機種インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/niigata_slot_01.php
   - `攻め時・ヤメ時・設定変更時→特にナシ`
   - confidence: ANALYSIS_HIGH
5. 5号機クロニクル「ニイガタ電子精機 5号機全機種一覧」
   - https://5goki.com/niigatadenshi
   - 2008/5導入、機械割98.2〜115.3%
   - confidence: RETROSPECTIVE_SPEC_DB
6. パチスロ業界初まとめ 更新情報5
   - https://slothistory.com/kousin_kako05.html
   - 型式 `パチスロリッジレーサーB`、2008/5/19発売、設定6相当112.1%の別系列記録
   - confidence: OLD_INDUSTRY_HISTORY
7. P-WORLD「パチスロリッジレーサー」
   - https://www.p-world.co.jp/machine/database/5155
   - 型式、ニイガタ電子精機、2008年05月導入
   - confidence: INDUSTRY_DB
8. こだわり山佐の館「発売年数表」
   - https://plaza.rakuten.co.jp/jognoyamasa/4000/
   - `パチスロリッジレーサーB（インパルス） 2008/05/19発売`
   - confidence: RETROSPECTIVE_FAN_DATABASE

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のRT残状態: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみでのRT残状態: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン/初期出目/ランプ等）: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_PAYOUT_RATE
