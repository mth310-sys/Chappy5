# パチスロエイリヤンビギンズ

machineName: パチスロエイリヤンビギンズ
manufacturer: サミー
releaseDate: 2011-06-06
releaseDateStatus: EXACT_DATE_CROSSCHECKED; K-Naviとパチビーがホール導入日2011-06-06で一致。
generation: 5号機
systemType: ノーマルAタイプ / ボーナス + 天井RT
coreStatus: COMPLETE_CORE_EXCEPT_BASE_AND_RESET_CARRYOVER; RESET_BEHAVIOR_PARTIAL_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 584 / chronologicalFrontier 2011-06-27「大逆転」から継続。
- LATEST_HANDOFFの6月漏れ監査指示に従い、repo検索で「エイリヤンビギンズ」が未登録であることを確認。
- K-Naviおよびパチビーが2011-06-06導入で一致するため、585件目として時系列BACKFILL。
- 遡及追加のため chronologicalFrontier は2011-06-27のまま維持する。

## settingConfiguration

- 設定1〜6の6段階。

## payoutRateBySetting

- 設定1: **97.0%**
- 設定2: **98.7%**
- 設定3: **100.7%**
- 設定4: **104.3%**
- 設定5: **108.2%**
- 設定6: **113.2%**

旧解析資料の設定別機械割。K-Naviの機械割専用ページは現存リンクを確認したが今回本文キャッシュを取得できず、単一旧解析値として保持。
confidence: ANALYSIS_SINGLE_WITH_DEDICATED_KNAVI_PAGE_EXISTENCE_CONFIRMED

## bonusProbabilityBySetting

### BIG
- 設定1: **1/249.2**
- 設定2: **1/248.2**
- 設定3: **1/244.5**
- 設定4: **1/239.2**
- 設定5: **1/226.0**
- 設定6: **1/210.1**

### MID
- 設定1: **1/374.5**
- 設定2: **1/343.1**
- 設定3: **1/324.4**
- 設定4: **1/281.3**
- 設定5: **1/265.3**
- 設定6: **1/237.5**

### ボーナス合算
- 設定1: **1/149.6**
- 設定2: **1/144.0**
- 設定3: **1/139.4**
- 設定4: **1/129.3**
- 設定5: **1/122.0**
- 設定6: **1/111.5**

K-Naviと旧解析資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「エイリヤンビギンズ / サミー」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み替え、K-Navi、P-WORLD、パチビー、旧解析・実践・回顧資料を再探索したが、直接掲載値を確定できず。小役確率から逆算しない。

## basicPayout

- BIG: **最大311枚**
- MID: **約91枚**
- BIG規定払い出し: **344枚超で終了**
- MID規定払い出し: **90枚超で終了**
- 通常時の出玉増加主体: **ボーナス**
- 天井RT純増: **約+0.3枚/G**

P-WORLD、パチビー、K-Naviで整合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ノーマルAタイプ。通常時の長期ゲーム数解除モード、AT、ART、CZは確認されない。
- ハマリ救済として天井RTを搭載。
- BIG終了後 **777G** 消化で天井RTへ移行。
- MID/REG終了後 **555G** 消化で天井RTへ移行。
- 天井RTは **次回ボーナス成立まで継続**。
- 天井RT純増は **約+0.3枚/G**。
- プレミアムAI機能は告知頻度・演出選択の機能であり、長期内部モードとして扱わない。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Navi機種ページに本機専用「設定変更後の挙動」解析ページ（https://p-kn.com/slot/1428/31677/）が存在することまでは確認したが、今回本文を取得できず、設定変更時の天井RTカウンタ・RT状態等の処理を断定しない。機種名、サミー、設定変更、リセット、朝一、据え置き、宵越し、天井RT、電源OFF/ON、ガックン等へ検索語を変更し、K-Navi、P-WORLD、パチビー、旧解析、天井狙い資料、実践・回顧資料を横断しても別系統の直接記述を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にBIG後777G / MID後555Gの天井進捗を保持するか、本機固有の直接資料を今回確定できず。一般則から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井進捗・天井RT状態の処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井カウンタはBIG後777G / MID後555Gで存在するが、設定変更時のCLEAR/RETAINを直接確定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はBIG後777G / MID後555G。設定変更専用短縮天井・変更後の別規定G数は確認できず、通常天井をそのままリセット後値と推定しない。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; RT_STATE_RESET_UNVERIFIED**。通常時の解除モードは確認されない。天井RT状態の設定変更時処理は未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。天井RT中を含むRT状態の設定変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用短縮天井、高確スタート、朝一専用当選率などの公開恩恵を確定できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。前日天井進捗が設定変更で消失するか自体を確定できていないため、不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、パトUFO・ランプ等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常天井: **BIG後777G / MID(REG)後555G**
- 天井恩恵: **次回ボーナスまで継続するRT / 約+0.3枚/G**
- 設定変更時ゲーム数CLEAR/RETAIN: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**
- 設定変更時RT状態: **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時天井進捗/RT状態: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時天井進捗/RT状態: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; NORMAL CEILING/RT CONFIRMED, SETTING-CHANGE/CARRYOVER/POWER-CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

- 今回、主要性能コアで確定的な数値競合は確認せず。
- K-Naviには設定変更後の挙動専用ページが存在するが本文取得不能。内容を推定せずUNVERIFIEDとして保持。

## missingFields

- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「エイリヤンビギンズ / パチスロエイリヤンビギンズ / Sammy / サミー」と「導入 / 機械割 / BIG / MID / REG / 合算 / 50枚 / 1000円 / ベース / 天井 / RT / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン / 型式 / 検定」を組み替え、K-Navi、P-WORLD、パチビー、旧解析ブログ、天井狙い一覧、実践・回顧資料まで再探索。導入日、ボーナス確率、獲得枚数、通常天井、天井RT性能は複数系統で照合。機械割は旧解析値を回収。50枚ベースとresetBehaviorの変更/据え置き/電断/判別は直接根拠不足のため推定補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「パチスロエイリヤンビギンズ」
   - https://p-kn.com/slot/1428/
   - ホール導入2011-06-06、BIG/MID/合算確率、ノーマルタイプ、天井・技術介入、本機専用「設定変更後の挙動」項目の存在。
2. K-Navi「設定変更後の挙動」現存リンク
   - https://p-kn.com/slot/1428/31677/
   - 専用解析ページのURLは確認。今回本文取得不能のため具体挙動の根拠には使用せず。
3. P-WORLD「パチスロエイリヤンビギンズ」
   - https://www.p-world.co.jp/machine/database/6363
   - 5号機ノーマルタイプ、BIG最大311枚、MID約91枚、BIG後777G / MID後555Gの天井RT、約+0.3枚/G。
4. パチビー「パチスロ エイリヤンビギンズ」
   - https://www.pachibee.jp/machines/about/211040007
   - 導入日2011-06-06、ノーマルタイプ、BIG後777G / REG後555Gから天井RT。
5. パチビー「基本スペック」
   - https://www.pachibee.jp/machines/index/211040007
   - BIG最大311枚、MID約91枚、天井RT条件。
6. 旧解析「エイリヤンビギンズ・ボーナス確率と天井詳細とプレミアムAI機能」
   - https://ab01.seesaa.net/article/275489928.html
   - BIG/MID/合算、機械割97.0〜113.2%、BIG後777G / REG後555G、天井RT約+0.3枚/G。

## confidenceSummary

- 導入日: **HIGH_CROSSCHECKED**
- ボーナス確率: **HIGH_CROSSCHECKED**
- 機械割: **ANALYSIS_SINGLE**
- 獲得枚数 / 天井 / 天井RT: **HIGH_CROSSCHECKED**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- resetBehavior: **PARTIAL_UNVERIFIED_AFTER_RESEARCH**
