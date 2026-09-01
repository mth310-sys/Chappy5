# パチスロ格闘美神ウーロン

- machineName: パチスロ格闘美神ウーロン
- manufacturer: サミー
- modelName: 格闘美神 武龍（ウーロン）X 系列
- releaseDate: 2008-05-19
- releaseDateDefinition: 当時業界史の発売日。後年DBのみでなく、2008年当時の更新記録で2008/5/19発売を確認。
- releaseDateConfidence: OLD_INDUSTRY_HISTORY_EXACT_DATE
- generation: 5号機初期
- systemType: ノーマル+RT / 技術介入 / 天井RT
- coreStatus: COMPLETE_CORE_WITH_PAYOUT_DEFINITION_VARIANTS
- resetBehaviorQA: PARTIAL_WITH_SINGLE_SOURCE_RESET_BENEFIT
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

- 技術介入成功率で大きく変化するため、定義を分けて保持する。
- パチマガスロマガ BIG中チェリー100%成功シミュレート値（設定1/3/5/F）: `100.48 / 104.33 / 108.19 / 113.15%`。
- パチマガスロマガ BIG中チェリー50%成功シミュレート値: `99.28 / 103.04 / 106.85 / 111.71%`。
- 5号機まとめwikiは攻略度レンジとして `96.7〜101.5 / 99.8〜105.0 / 102.9〜108.6 / 106.9〜113.0%` を掲載。
- 後年回顧資料では完全攻略時 `100.9 / 104.6 / 108.4 / 113.1%`。
- 同じ「機械割」でも攻略条件・シミュレート条件が異なるため平均化しない。

### initialHitBySetting

設定構成は `1 / 3 / 5 / F`（パチマガスロマガ、K-Navi）。

- BIG: `1/397.19 / 1/366.12 / 1/341.33 / 1/309.13`
- REG: `1/736.36 / 1/668.73 / 1/601.25 / 1/541.62`
- ボーナス合成: `1/258.02 / 1/236.59 / 1/217.73 / 1/196.80`
- 5号機まとめwikiの確率自体は一致するが2段階目の設定ラベルを「2」と記載しているため、ラベルだけは誤記/別表記の可能性を残し、パチマガスロマガとK-Naviの `1/3/5/F` を本DBの主系列とする。

### baseGamesPer50

- パチマガスロマガ 1000円あたりゲーム数（設定1/3/5/F）: `47.19 / 48.56 / 50.07 / 51.19G`。
- 後年DBの `47.2〜51.2G` と一致。
- 50枚貸し1000円基準として本DBの比較用baseGamesPer50に採用。

### netIncrease

- BIG後および天井のDRAGON TIME: 約 `+0.2枚/G`（P-WORLD）。
- 100Gの通常DRAGON TIMEと、次回ボーナスまで継続する天井DRAGON TIMEが存在。

### basicPayout

- BIG: 最大363枚。
- REG: 約116枚 / 最大116枚系列。
- K-Naviの規定払い出し表記はBIG404枚超、REG119枚超で終了。
- ノーマルBIG中は単独チェリー成立時のビタ押し成功でナビを獲得し、最大獲得へ近づく。ハイパーBIGはナビあり。

### modeSpecificMinimumData

- BIG後: 100GのDRAGON TIME。
- BIG後999G消化: 次回ボーナスまで継続する天井DRAGON TIME。
- REG後777G消化: 次回ボーナスまで継続する天井DRAGON TIME。
- 天井RT純増: 約+0.2枚/G。
- DRAGON TIME中に成立したBIGはハイパーBIG扱い。
- 技術介入による獲得差が大きく、物差し上は通常攻略値と完全攻略値を分離して扱う。

## resetBehavior

- settingChangeBehavior: `SETTING_CHANGE_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `CONFLICT_OR_UNVERIFIED_SETTING_CHANGE_CEILING_COUNTER`
- ceilingAfterReset: `SETTING_CHANGE_100G_DRAGON_TIME_BENEFIT_REPORTED; ORIGINAL_999_777_COUNTER_HANDLING_UNVERIFIED`
- modeAfterReset: `SETTING_CHANGE_SPECIAL_RT_STATE_REPORTED_SINGLE_SOURCE`
- stateAfterReset: `SETTING_CHANGE_TO_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `SETTING_CHANGE_AFTER_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `SETTING_CHANGE_AFTER_DRAGON_TIME_100G_REPORTED_SINGLE_SOURCE`

### resetBehavior調査メモ

- `格闘美神 武龍 / 格闘美神ウーロン / ウーロンX / サミー` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / 999G / 777G / ドラゴンタイム / ガックン / 初期出目` を組み替えて探索。
- 2008年12月の攻略系ブログに「BIG後・設定変更後100G間もドラゴンタイム」と明記されるため、設定変更時100G RTを `ANALYSIS_SINGLE` 相当で保持する。
- 一方、別の2008年実戦系資料は「天井までのG数は設定変更では（おそらく）リセットされない」と推測表現で記載。直接確定情報ではないため、天井カウンタの設定変更時処理は推測で埋めず `CONFLICT_OR_UNVERIFIED` とした。
- 据え置き時の999/777Gカウンタ継続、電源OFF→ONのみでのカウンタ・DRAGON TIME残G、設定変更時100G RT終了後の天井起算方法、本機固有のガックン/初期出目は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機初期のため `NOT_APPLICABLE`。

## 導入時期

- `パチスロ業界初まとめ` の2008年5月更新記録で `格闘美神 武龍（ウーロン）X / サミー / 2008/5/19発売` を確認。
- 後年みんスロも導入日を2008年5月19日としており一致。

## sources

取得日: 2026-09-01

1. パチマガスロマガ「格闘美神ウーロン・ボーナス確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/112/h.php
   - 設定1/3/5/FのBIG・REG・合成、技術介入成功率別PAYOUT
   - confidence: ANALYSIS_HIGH
2. パチマガスロマガ「格闘美神ウーロン・小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/112/c.php
   - 1000円あたり47.19〜51.19G
   - confidence: ANALYSIS_HIGH
3. P-WORLD「パチスロ格闘美神ウーロン」
   - https://www.p-world.co.jp/machine/database/5171
   - BIG最大363枚、REG約116枚、BIG後999G/REG後777G天井、天井RT約+0.2枚/G
   - confidence: ANALYSIS_HIGH
4. K-Navi「パチスロ格闘美神ウーロン」
   - https://p-kn.com/slot/803/
   - 設定1/3/5/FのBIG/REG/合成、技術介入機、天井カテゴリ
   - confidence: ANALYSIS_HIGH
5. パチスロ5号機まとめwiki「格闘美神 武龍」
   - https://w.atwiki.jp/5gouki/pages/115.html
   - BIG後100G DRAGON TIME、999/777G天井、攻略度別機械割レンジ
   - confidence: RETROSPECTIVE_ANALYSIS
6. パチスロ業界初まとめ 更新情報5
   - https://slothistory.com/kousin_kako05.html
   - 2008/5/19発売
   - confidence: OLD_INDUSTRY_HISTORY
7. 裏ブログ－URATAIDOU部 2008-12-14
   - https://blog.livedoor.jp/urataidou/archives/55188858.html
   - 設定変更後100G DRAGON TIME、天井、技術介入時機械割
   - confidence: CONTEMPORARY_ANALYSIS_SINGLE
8. ターリンのブログ旧記事一覧
   - https://plaza.rakuten.co.jp/smb3todq8c/diaryall/
   - 当時の天井狙いメモで「設定変更では（おそらく）天井G数リセットされない」と推測記述
   - confidence: CONTEMPORARY_USER_ANALYSIS_LOW
9. みんスロ「格闘美神ウーロン」
   - https://minslo.com/%E6%A0%BC%E9%97%98%E7%BE%8E%E7%A5%9E%E3%82%A6%E3%83%BC%E3%83%AD%E3%83%B3/
   - 導入日2008-05-19、47.2〜51.2G、天井/獲得枚数
   - confidence: RETROSPECTIVE_SPEC_DB
10. パチセブン「新台入替自粛中のビタ祭り【前編】～名機ウーロン～」
   - https://pachiseven.jp/articles/detail/11319
   - 完全攻略時機械割、天井RTの回顧
   - confidence: RETROSPECTIVE_INDUSTRY_MEDIA

## missingFields

- 据え置き時の天井ゲーム数/RT状態の厳密な引継ぎ: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみでの天井ゲーム数/DRAGON TIME残G: UNVERIFIED_AFTER_RESEARCH
- 設定変更後100G DRAGON TIME終了後の999/777G天井カウンタ起算: UNVERIFIED_AFTER_RESEARCH
- resetDetection（ガックン/初期出目等）: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_PAYOUT_DEFINITION_BY_TECHNIQUE_LEVEL
- CONFLICT_SETTING_LABEL_ATWIKI_SECOND_ROW_2_VS_PRIMARY_SOURCES_3
- CONFLICT_OR_UNVERIFIED_SETTING_CHANGE_CEILING_COUNTER
