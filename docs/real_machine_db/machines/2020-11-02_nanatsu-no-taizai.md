# パチスロ七つの大罪

No: 1374
machineName: パチスロ七つの大罪
machineNameVariants: S七つの大罪 / 七つの大罪 / パチスロ 七つの大罪
manufacturer: タイヨーエレック製造 / サミー発売
releaseDate: 2020-11-02
formalModelName: S パチスロ七つの大罪 XS
certificationNumber: 0S0088

generation: 6号機
systemType: AT / 周期抽選 / CZ / 擬似ボーナス / ST型セット管理AT / 有利区間管理

## identity / release
- サミー公式は2020-09-01に発売を発表し、製造元をタイヨーエレック、2020年11月より全国導入予定と明記。
- 遊技日本の当時業界記事、必勝本、K-Navi、P-WORLD、HAZUSEで2020-11-02導入開始を確認。
- HAZUSE機種DBで型式名 `S パチスロ七つの大罪 XS`、検定番号 `0S0088` を確認。
- reliability: OFFICIAL / INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.4% |
| 3 | 100.6% |
| 4 | 103.2% |
| 5 | 107.3% |
| 6 | 110.6% |
- 必勝本、1geki、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
ボーナス+AT合算:
| 設定 | ボーナス+AT合算 |
|---:|---:|
| 1 | 1/279.5 |
| 2 | 1/269.0 |
| 3 | 1/260.0 |
| 4 | 1/237.2 |
| 5 | 1/218.3 |
| 6 | 1/188.4 |
- 本機で公開されている主要設定別初当たり指標。ボーナス単独/AT単独へ分解した設定別全数値は本レコードの物差し必須範囲外。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約43.6～43.7G/50枚。
- 必勝本43.6G、ちょんぼりすた/すろぱちクエスト43.7G。丸め差として保持し平均化しない。
- reliability: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス/AT: 約2.6枚/G。
- reliability: OFFICIAL_SUPPORTING / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 大罪ボーナス: 30G+バトル5G、純増約2.6枚/G。バトル勝利でAT突入。公開AT期待度は資料に約40～43%表現があるため、物差し値はゲーム数・純増を主値とする。
- エピソードボーナス: 30G、AT突入濃厚。
- AT「Seven Deadly Sins」: 1セット40G、純増約2.6枚/G。聖騎士バトル勝利でAT継続+報酬。
- 魔神覚醒: 1セット10Gの特殊ST。
- 最終決戦: 20G+バトル5G。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は250ptからのポイント減算による周期抽選。0pt到達でCZ/ボーナスを抽選。
- 天井: 通常時500G消化後の次回周期到達で「エリザベス覚醒」以上。
- 天井恩恵振り分け: エリザベス覚醒87.5% / 大罪ボーナスまたはエピソードボーナス12.5%（全設定共通）。
- エリザベス覚醒は期待度約70%の上位CZであり、天井到達=AT確定ではない。
- 500Gを跨いだ後の周期0pt到達が発動契機のため、実ゲーム数は500Gを超える場合がある。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態RESET。
- 有利区間RESETとなり、非有利区間「NOW LOADING…」状態から開始する。
- 非有利区間では成立役を参照して有利区間移行先を抽選する。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は、設定変更を伴わない純電源OFF→ONの公開表で天井ゲーム数・内部状態を引き継ぐとされる。
- 有利区間ランプも電断前状態を引き継ぐため、通常時に点灯していた台は朝一点灯が据え置き推測材料となる。
- カウンター表示/チェックポイント表示は電源ON後に伏せ表示へ変化するため、表示値そのものと内部進行を分離して扱う。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ON: 天井までのゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 液晶カウンターは「???」表示、チェックポイントは「?」表示へ変化。
- 液晶は「NOW LOADING…」表示から開始する公開解析あり。設定変更時も同表示となるため液晶だけでは完全判別できない。
- 有利区間はCARRY_OVER。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 液晶のポイント/チェックポイント表示は電断で伏せ表示になるが、内部天井進行の引継ぎとは別契約。

### ceilingAfterReset
- 設定変更後も通常天井は「500G消化後の次回周期到達」。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時: エリザベス覚醒87.5% / 大罪ボーナス以上12.5%。これは設定変更専用振り分けではなく通常天井の共通値。

### modeAfterReset
- 本機はポイント周期型で、設定変更後は非有利区間から新規有利区間へ移行する。
- 朝一専用の「モード振り分け」表や設定変更専用周期モードテーブルは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 非有利区間中の成立役別移行先抽選は公開されているためnumericResetDataへ保存。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 通常時にはポイント減算に関わる通常/高確状態が存在するが、設定変更直後の初期状態振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間「NOW LOADING…」へ。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 非有利区間は設定変更時、ボーナス/AT終了時などに突入する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は非有利区間から開始し、非有利区間中の成立役によりCZ直行抽選を受けられる。
- 弱チェリー/スイカ成立時: 周期開始90.8% / パトホークチャンス8.3% / エリザベス覚醒0.8%。
- 強チェリー/チャンス目成立時: 周期開始25.0% / パトホークチャンス58.3% / エリザベス覚醒16.7%。
- これは設定変更専用テーブルではなく「非有利区間滞在時」の共通抽選。朝一設定変更後が非有利区間開始のため、朝一に適用可能な公開数値として定義を分けて保持。
- 設定変更専用の天井短縮・AT確定・専用CZ確率は確認できず。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・有利区間進行を消去する。
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。

### resetDetection
- 通常時は有利区間ランプ点灯型とする複数攻略資料あり。
- 朝一の有利区間ランプ消灯: 設定変更濃厚。
- 朝一の有利区間ランプ点灯: 据え置き濃厚。
- ただし前日が非有利区間で終了しているケースやホール側対策を考慮し、絶対判別条件にはしない。
- 有利区間ランプ位置: WIN表示右下のドット。
- 設定変更/純電断とも液晶はNOW LOADING表示から始まる資料があるため、液晶表示単独では判別不可。
- 本機固有のリールガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 非有利区間中の成立役別有利区間移行先:
  - 弱チェリー/スイカ: 周期開始90.8% / パトホークチャンス8.3% / エリザベス覚醒0.8%。
  - 強チェリー/チャンス目: 周期開始25.0% / パトホークチャンス58.3% / エリザベス覚醒16.7%。
- 通常天井到達時の恩恵振り分け: エリザベス覚醒87.5% / 大罪ボーナス以上12.5%。設定変更専用値ではないため参考共通値として保持。
- 設定変更専用の朝一当選率、専用モード振り分け、専用短縮天井の公開値は `PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_NOT_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11。`パチスロ七つの大罪 / S七つの大罪 / 七つの大罪 / S パチスロ七つの大罪 XS / 0S0088 / タイヨーエレック / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 状態 / ポイント / モード / NOW LOADING / 有利区間 / 有利区間ランプ / ガックン` を組み替え、サミー公式、遊技日本、P-WORLD、HAZUSE、必勝本、1geki、ちょんぼりすた、パチマガスロマガ、パチ7、すろぱちクエスト、期待値見える化、後年DBを横断。設定変更/電断の天井・状態契約、非有利区間開始、ランプ判別、非有利区間成立役別数値まで複数系統で固定した。設定変更専用のモード振り分け/短縮天井/当選率、本機固有ガックンは十分な再探索後も直接値を固定できないためUNVERIFIED。

## conflicts
- baseGamesPer50: 必勝本43.6G/50枚、複数解析43.7G/50枚。表示精度の丸め差と判断可能だが平均化せず `43.6～43.7G` と出典定義を保持。
- daizaiBonusAtExpectation: 大罪ボーナスのAT期待度は資料に約40%と約43%がある。完全再現用詳細値ではないため主コアへ単一値として統合せずCONFLICT候補として保持。
- oldVsUpdatedResetInfo: 1gekiの2020-11-10時点ページでは設定変更/電断の天井・状態が「調査中」だが、後発解析の必勝本・期待値見える化・すろぱちクエスト等ではRESET/CARRY_OVER契約が公開。これは数値競合ではなく資料更新差として、後発一致情報をcanonicalに採用。

## sources
取得日: 2026-09-11

1. サミー公式 / 新機種「パチスロ七つの大罪」発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2020/1512.html
   - 2020-09-01発売発表、製造元タイヨーエレック、2020年11月導入予定。
   - reliability: OFFICIAL
2. 遊技日本 / 11/2導入記事
   - https://yugi-nippon.com/pachinko-new-machine/post-38614/
   - 2020-11-02全国導入、基本スペック、純増、AT40G等。
   - reliability: INDUSTRY
3. HAZUSE
   - https://hazuse.com/machine/pachislot/9S1816/
   - 型式 `S パチスロ七つの大罪 XS`、検定番号`0S0088`、導入日、出玉率レンジ、純増。
   - reliability: DATABASE_HIGH
4. 必勝本
   - https://hisshobon.news/uncategorized/3677/
   - 設定別合算/機械割、43.6G/50枚、設定変更/電断の天井・状態・液晶表示契約。
   - reliability: ANALYSIS_HIGH
5. 1geki / 機種概要
   - https://1geki.jp/slot/s_taizai_index/
   - 設定別合算/出玉率、導入日、純増。
   - reliability: ANALYSIS_HIGH
6. 1geki / 天井・設定変更（当時更新版）
   - https://1geki.jp/slot/s_taizai_index/3/
   - 天井500G+α、天井恩恵87.5/12.5%。2020-11-10時点ではreset詳細調査中であったことも保持。
   - reliability: ANALYSIS_HIGH
7. 1geki / 非有利区間 NOW LOADING
   - https://1geki.jp/slot/s_taizai_index/40/
   - 設定変更時に非有利区間突入、成立役別移行先90.8/8.3/0.8および25.0/58.3/16.7%。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた
   - https://chonborista.com/slot/sammy-slot/119448/
   - 43.7G/50枚、天井、周期仕様、有利区間移行時抽選、設定変更RESET/電断CARRY_OVER表。
   - reliability: ANALYSIS_HIGH
9. 期待値見える化
   - https://slotjin.com/tenjoukitaichi/nanataizai/
   - 設定変更後は天井RESET/非有利区間/ランプ消灯、据え置きは引継ぎ、ランプ位置と朝一判別。
   - reliability: ANALYSIS_HIGH
10. すろぱちクエスト
   - https://www.slopachi-quest.com/article/the-seven-deadly-sins-tennjou/
   - 天井、通常時点灯型有利区間ランプ、朝一消灯=変更濃厚/点灯=据え置き濃厚、非有利区間の扱い。
   - reliability: ANALYSIS_HIGH
11. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9241
   - タイヨーエレック製造、AT/ボーナス基本ゲーム数、AT40G、各CZ概要。
   - reliability: DATABASE_HIGH
12. パチマガスロマガ / 大罪ボーナス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/182/bn01-3.php
   - 大罪ボーナス30G+バトル5G等。
   - reliability: ANALYSIS_HIGH
13. パチ7 / 大罪ボーナス
   - https://pachiseven.jp/machines/6145/cutout/9
   - 大罪ボーナス30G+5G、純増約2.6枚/G、AT期待度約43%。
   - reliability: ANALYSIS_HIGH

missingFields:
- 設定変更専用モード/周期テーブル: UNVERIFIED_AFTER_RESEARCH
- 設定変更直後の通常/高確初期振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用朝一当選率: UNVERIFIED_AFTER_RESEARCH
