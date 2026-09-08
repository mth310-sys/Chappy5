machineName: 南国物語SPECIAL
manufacturer: オリンピア
releaseDate: 2016-06-20
recordNumber: 991
generation: 5号機 / 5.5号機期
systemType: ノーマル / リノ方式・リアルボーナス連続タイプ / 完全告知
formalModelName: 南国物語/F5
certificationNumber: 5S1350
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 型式名 `南国物語/F5` は当時業界資料、P-WORLD、中古実機DBで一致。
- 鹿児島県公報（平成28年2月23日）で、回胴式遊技機 `南国物語／Ｆ５`、製造者 株式会社オリンピア、検定番号 `5S1350` を公的資料として確認。
- 導入日は複数の当時解析が **2016-06-20** とする一方、ALL7は **2016-06-27** を掲載。PiDEAの2016-05-06記事は納期を「6/19 or 26」としており地域/納品差の可能性がある。canonicalは当時解析複数一致の2016-06-20とし、06/27をCONFLICTとして保持。
reliability: PUBLIC_RECORD_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 100.7% |
| 4 | 102.0% |
| 5 | 104.0% |
| 6 | 107.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス初当たり | BIG | REG | ボーナス合算（連チャン込み） |
|---:|---:|---:|---:|---:|
| 1 | 1/399.0 | 1/208.7 | 1/235.3 | 1/110.6 |
| 2 | 1/392.0 | 1/202.9 | 1/228.7 | 1/107.5 |
| 3 | 1/373.9 | 1/192.9 | 1/217.3 | 1/102.0〜1/102.2 |
| 4 | 1/352.3 | 1/186.9 | 1/210.1 | 1/98.9 |
| 5 | 1/272.2 | 1/183.7 | 1/191.1 | 1/93.7 |
| 6 | 1/195.1 | 1/174.8 | 1/174.9 | 1/87.4 |
- 設定3合算は資料に `1/102.0` と `1/102.2` の丸め/算出差があるため `CONFLICT_SETTING3_COMBINED_102_0_VS_102_2` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1: **29.6G/50枚**
- 設定2: **29.6G/50枚**
- 設定3: **29.7G/50枚**
- 設定4: **29.7G/50枚**
- 設定5: **29.9G/50枚**
- 設定6: **30.3G/50枚**
- PiDEAの事前評価は代表値 **約29G/50枚**。
reliability: INDUSTRY_ANALYSIS_HIGH

## netIncrease
- AT/ART非搭載のリアルボーナス機のため **NOT_APPLICABLE**。
- 出玉はBIG/REGのリアルボーナスで増加。

## basicPayout
- BIG CHANCE: **約246枚**。
- REGULAR CHANCE: **約100枚**。
- P-WORLD、PiDEA、複数解析で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時にゲーム数天井は **非搭載**。
- 特殊1枚役の取りこぼし→MB入賞を経てボーナス高確率状態へ移行するリノ方式。
- ボーナス終了後は必ず高確率状態「蝶ときめきゾーン」から開始。
- 高確率中のボーナス確率は設定1で約1/9.5、転落約1/28.5、ボーナスループ約75%。設定差があり、設定6はボーナス約1/12.0 / 転落約1/20.0 / 連チャン率62.5%の解析値。
- 実機完全再現用の詳細抽選は物差し用途外のため収集しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **設定変更のみではボーナス高確率状態を消去しない。高確率状態はCARRYOVER。**
- 当時解析の設定変更/電源OFF・ON比較表、および朝一解析で一致。
- 設定変更によるゲーム数天井・モード再抽選は、本機がゲーム数天井/長期モード管理型ではないためN/A。

### carryOverBehavior
- 据え置き: ボーナス高確率状態を **CARRYOVER**。
- 前日が高確率状態のまま閉店し、店側が状態転落まで回さなければ翌朝も高確率を狙える。

### powerCycleBehavior
- 純電源OFF→ON: ボーナス高確率状態を **CARRYOVER**。
- 設定変更と純電断の双方で高確率状態引継ぎを直接比較表で確認。

### gameCounterReset
- ゲーム数天井: **NOT_APPLICABLE / NO_CEILING**。
- 前日ゲーム数を引き継ぐことで到達する天井はない。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。
- 設定変更専用短縮天井もなし。

### modeAfterReset
- 沖ドキ系の長期ゲーム数モード再抽選に相当する設定変更契約は **NOT_APPLICABLE**。
- 本機の主要朝一内部状態はボーナス高確率/通常状態として扱う。

### stateAfterReset
- 設定変更: **ボーナス高確率状態CARRYOVER**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- **RAMクリア後は高確率状態START** とする当時解析あり。設定変更・純電断・RAMクリアを混同しない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更自体に新規の高確付与恩恵はないが、**前日高確率状態を消さない**ため、前日連チャン状態閉店台は朝一狙い対象になり得る。
- RAMクリア後は高確率状態開始という別契約がある。

### resetPenalties
- 設定変更のみで高確率を消去しないため、確認できる設定変更固有の主要不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ホールが朝一に状態転落まで手回しした場合は高確狙いが成立しないが、これは設定変更そのものの内部契約ではない。

### resetDetection
- 設定変更そのものを確定するガックン/初期出目/表示等の本機固有契約は、機種名/型式/オリンピア/設定変更/リセット/朝一/ガックン/電源を組み替えて再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一方、高確率状態自体は転落目とリプレイ頻度で推測可能。朝一に高確が残っていても、それだけで「設定変更した」ことの判別にはならない。

### numericResetData
- 設定変更時の専用振り分け数値: **NONE / NOT_APPLICABLE**。
- 高確率状態を設定変更・電源OFF→ONとも100%引き継ぐという状態契約を公開比較表で確認。
- RAMクリア: 高確率状態START（当時解析）。

## dataQualityNotes
- 性能コアはP-WORLD、スロ確、期待値見える化、PiDEA等を横断。
- 型式/検定番号は鹿児島県公報で公的確認済み。
- 導入日は2016-06-20と2016-06-27で資料競合。複数の当時解析が06/20、ALL7が06/27、業界事前記事が納期6/19 or 26とするため平均せず保持。
- resetBehaviorはリノ系一般論だけでなく、本機固有の設定変更/電源OFF・ON比較表で高確率引継ぎを確認。
- RAMクリア後高確率STARTは設定変更とは別契約として保存。

## sources
取得日: 2026-09-08

1. 鹿児島県公報 平成28年2月23日 第3189号の2
   - https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1602/documents/50525_20160222222935-1.pdf
   - 型式 `南国物語／Ｆ５`、製造者 オリンピア、検定番号 `5S1350`。
   - reliability: PUBLIC_RECORD
2. P-WORLD — 南国物語SPECIAL
   - https://www.p-world.co.jp/machine/database/8045
   - オリンピア、5号機ノーマル、初当たり、BIG約246枚/REG約100枚、ボーナス高確率構造、型式/検定番号。
   - reliability: INDUSTRY_DATABASE
3. スロ確.com — 南国物語SPECIAL
   - https://slotkaku.com/nangokumonogatari_sp
   - 2016-06-20、設定別機械割/初当たり/BIG/REG/合算、29.6〜30.3G/50枚、天井なし、設定変更/電源OFF ONとも高確率引継ぎ、RAMクリア高確START。
   - reliability: PERIOD_ANALYSIS
4. 期待値見える化 — 南国物語スペシャル
   - https://slotjin.com/slot/nangoku-special/
   - 2016-06-20、初当たり/合算/機械割、約29.6G/50枚、天井なし、設定変更で高確率状態消失なし。
   - reliability: PERIOD_ANALYSIS
5. PiDEA X — 三木流、南国物語スペシャルの評価は？（2016-05-06）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E5%8D%97%E5%9B%BD%E7%89%A9%E8%AA%9E%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納期6/19 or 26、初当たり、ベース約29G、天井なし、BIG約246枚/REG約100枚、高確ボーナス/転落。
   - reliability: PERIOD_INDUSTRY
6. pachinko's blog — オリンピア「南国物語SPECIAL」の筐体＆情報
   - https://pachinko.hatenablog.jp/archive/2016/06/01
   - 型式 `南国物語/F5`、2016年6月リリース。
   - reliability: PERIOD_DATABASE
7. ALL7 — 2016年6月導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - 南国物語SPECIALを2016-06-27導入予定として掲載。
   - reliability: PERIOD_DATABASE
8. 真パチスロ備忘録 — リノ系台の連チャンモード狙い目まとめ
   - https://sin-surobi.com/reno/16630/
   - RAMクリア後連チャンモードSTART、前日ボーナス中終了台のリセット後も連チャンモードSTART、天井なし。
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更そのものを確定できる本機固有のガックン/表示等（十分再探索後も確認なし）

## conflicts
- `RELEASE_DATE_2016_06_20_VS_2016_06_27`: スロ確・期待値見える化・当時解析は06/20、ALL7は06/27。PiDEAは納期6/19 or 26。canonicalは複数当時解析一致の06/20、06/27を競合として保持。
- `SETTING3_COMBINED_1_102_0_VS_1_102_2`: 設定3の連チャン込み合算に資料差。平均せず保持。
