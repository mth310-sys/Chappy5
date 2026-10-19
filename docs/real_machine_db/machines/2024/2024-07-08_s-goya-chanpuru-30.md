# S ご～やちゃんぷる～30φ

recordNo: 1661
machineName: S ご～やちゃんぷる～30φ
aliases: Sご～やちゃんぷる～-30 / Sパチスロゴーヤ30 / ゴーヤチャンプルー30パイ
manufacturer: オッケー.製造 / KYORAKUブランド
formalModel: SパチスロゴーヤMJA
inspectionCode: 230283
releaseDate: 2024-07-08
generation: 6.5号機 / メダル機 / 30Φ
systemType: AT（疑似ボーナス / 天国ループ型）
settings: L / 1 / 2 / 4 / 5 / 6（設定3なし）
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- KYORAKU公式は2024-06-18に25φ/30φの2スペックを発表し、全国導入前の直営店フィールドテストは2024-06-28開始。
- 1geki新台カレンダーは2024-07-08導入、30φをOK!!として掲載。
- HAZUSEは型式 `SパチスロゴーヤMJA`、検定番号 `230283`、2024-07-08導入を掲載。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.3%
- setting2: 98.5%
- setting4: 102.1%
- setting5: 105.2%
- setting6: 108.4%
- settingL: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
initialHitBySetting:
- setting1: 1/236.7
- setting2: 1/233.7
- setting4: 1/227.5
- setting5: 1/221.5
- setting6: 1/221.4
baseGamesPer50: 約31.1G/50枚（設定1）
netIncrease: 約3.0枚/G
basicPayout:
- BIG BONUS / SPECIAL BIG BONUS: 70G・約210枚
- CHANPURU BONUS / SURPRISE BONUS: 20G・約60枚
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は成立役抽選 + 規定ゲーム数到達で疑似ボーナス当選を目指す。
- モード: 通常A / 通常B / なんくるないさ / 引き戻しA / 引き戻しB / 天国 / サプライズ。
- 通常A・通常B・なんくるないさ・引き戻しBの最大天井999G、引き戻しAは299～300G、天国は33G以内。
- 天国は平均継続約84%、最大約92%、天国中BIG割合約97%、期待獲得約1200枚（設定1の公表/解析値）。
- 天国間2500G到達中のボーナスで次回天国濃厚。
- 通常時の内部状態は通常 / 収穫高確率。収穫高確率はボーナス確率約1/24。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_AND_SOME_UI_DETAILS_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井までのゲーム数: RESET。
- 内部モード: RESET/再抽選。設定変更時は通常A / 通常B / なんくるないさのいずれかへ移行。
- 内部状態: RESET/再抽選。
- ゴーヤ観察日記: RESET/再抽選。
- 有利区間: RESETとする解析資料あり。
- 設定変更後は全モードで初当り規定G数振り分けが浅めに優遇される。通常Aでも299G以内のボーナス当選率が約60%以上とする解析が一致。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は設定変更処理を行わないため、天井G数・内部モード・内部状態を継続する扱い。
- 規定ゲーム数以外の成立役でボーナス当選した場合、規定ゲーム数進行はボーナス後も引き継がれる仕様が公開されている。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井G数・内部モード・内部状態・ゴーヤ観察日記を引き継ぐ。
- 演出モード等UI状態は公開資料で未確定。
confidence: ANALYSIS_HIGH_FOR_CORE_INTERNAL_ITEMS / UNVERIFIED_FOR_UI

### gameCounterReset
- 設定変更: 天井進行RESET。
- 据え置き/純電断: 内部天井進行CARRY_OVER。
- 成立役によるボーナス当選では規定ゲーム数をリセットしない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時最大天井自体は999Gで、設定変更専用の固定短縮天井は確認されない。
- ただし設定変更後専用の規定G振り分け優遇があり、通常Aでも299G以内当選率約60%以上。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時: 通常A / 通常B / なんくるないさへ再抽選。
- 通常Bは次回50%以上で天国、なんくるないさは天国まで下位転落なし・裏ストック獲得率優遇。
- 設定変更時の3モード個別選択率は再探索後も固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DESTINATIONS / UNVERIFIED_FOR_EXACT_SPLIT

### stateAfterReset
- 設定変更: 内部状態再抽選、ゴーヤ観察日記再抽選。
- 電源OFF→ON: 内部状態・ゴーヤ観察日記引継ぎ。
- ゴーヤ観察日記の設定変更時選択率: 5月60.2% / 6月33.2% / 7月6.3% / 8月0.4%。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 解析資料では設定変更時RESET、電源OFF→ON時CARRY_OVER。
confidence: ANALYSIS_SINGLE_TO_HIGH

### resetBenefits
- 設定変更後は通常A/B/なんくるないさから開始し、規定G振り分けが浅めに優遇。
- 通常Aでも299G以内当選率約60%以上。
- ゴーヤ観察日記を再抽選。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更固有の主要不利要素・固定損失率は公開資料から確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更後は規定G分布が浅いが、単独で変更確定にはならない。
- 本機固有ガックン条件/発生率は、機種名・型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- UI/開始ステージのみでの確定判別も固定資料なし。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN_AND_UI

### numericResetData
- setting-change starting modes: 通常A / 通常B / なんくるないさ（個別率PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
- 通常Aでも設定変更後299G以内当選率: 約60%以上
- ゴーヤ観察日記再抽選: 5月60.2% / 6月33.2% / 7月6.3% / 8月0.4%
- normal max ceiling: 999G
- heaven: 33G以内
- 引き戻しA: 299～300G
- 天国間天井: 2500G

## conflicts
- ニコナナ独自調査では設定1/2出玉率を97.2%/98.7%とするが、P-WORLD・HAZUSE・必勝本・複数解析は97.3%/98.5%で一致。canonicalは多数一致値を採用し、差は `CONFLICT_PAYOUT_SETTING1_2_MINOR` として保持。
- 引き戻しA天井は資料に299G/300G表記差。実ゲーム表記上の境界差候補として平均化せず併記。

## missingFields
- 設定Lの出玉率/初当り: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時の通常A/B/なんくるないさ個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 電断後の演出モード/UI開始状態: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- KYORAKU公式 NEWS: https://www.kyoraku.co.jp/news/detail/756
- 遊技日本/P-WORLD フィールドテスト: https://news.p-world.co.jp/articles/28108/nippon
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0081/
- P-WORLD: https://www.p-world.co.jp/machine/database/10078
- パチ&スロ必勝本 基本スペック/天井設定変更: https://p.hisshobon.jp/vpage/2644/2
- パチ&スロ必勝本 モード: https://hisshobon.com/machineinfo/84514/
- パチ&スロ必勝本 ゴーヤ観察日記: https://hisshobon.com/machineinfo/84515/
- パチマガスロマガ 通常時モード30Φ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/18/tj03.php
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/216301/
- なな徹: https://nana-press.com/kaiseki/machine/775/22455/
- ニコナナ（競合確認）: https://www.niconana.net/movie/%E6%96%B0%E5%8F%B0%E3%80%90s%E3%81%94%EF%BD%9E%E3%82%84%E3%81%A1%E3%82%83%E3%82%93%E3%81%B7%E3%82%8B%EF%BD%9Es%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%82%B4%E3%83%BC%E3%83%A4%E3%80%91%E3%83%97/
