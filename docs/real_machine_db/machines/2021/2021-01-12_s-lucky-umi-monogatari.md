# S Lucky海物語

No: 1387
machineName: S Lucky海物語
machineNameVariants: S Lucky海物語 / Lucky海物語 / ラッキー海物語 / SLucky海物語KH
manufacturer: 三洋物産
releaseDate: 2021-01-12
formalModelName: SLucky海物語KH
certificationNumber: 0S0887

generation: 6号機
systemType: ノーマル / ボーナス主体 / 告知タイプ

## identity / release
- HAZUSEで型式 `SLucky海物語KH`、検定番号 `0S0887`、メーカー三洋、導入開始日2021-01-12を確認。
- Amusement Japan、P-WORLD転載、パチビー、K-Naviでも2021-01-12導入を一致確認。
- reliability: INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.7% |
| 3 | 99.8% |
| 4 | 103.0% |
| 5 | 106.5% |
| 6 | 109.7% |
- パチビー、必勝本、HAZUSE系資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
本機はノーマルタイプのため、主要初当たりはボーナス合算を採用。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/284.9 | 1/420.1 | 1/169.8 |
| 2 | 1/292.6 | 1/344.9 | 1/158.3 |
| 3 | 1/273.1 | 1/404.5 | 1/163.0 |
| 4 | 1/280.1 | 1/292.6 | 1/143.1 |
| 5 | 1/246.4 | 1/318.1 | 1/138.8 |
| 6 | 1/246.4 | 1/250.1 | 1/124.1 |
- パチビー、必勝本、1geki、K-Navi、HAZUSEで照合。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約41.4G/50枚（設定1）。
- 必勝本系資料で41.4G、複数二次資料では「約41G/50枚」と丸め表記。
- 1gekiのベース欄は現在調査中だが、他系統資料で数値を確認できるため欠損扱いにはしない。
- reliability: ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE。
- ボーナスのみで出玉を増やす6号機ノーマルタイプで、AT/ARTの純増概念は本機の物差し項目として非該当。

## basicPayout
- BIG BONUS: 約260枚。285枚を超える払い出しで終了。
- REG BONUS: 91枚。7回遊技または7回入賞で終了。
- パチビー、HAZUSE、PiDEA等で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は告知演出の異なる「Luckyモード」「海モード」を任意選択可能。
- これは内部当選モードではなく演出モードなので、朝一の内部モード移行率等とは分離する。
- 天井機能非搭載。
- ボーナスのみで出玉を増やすノーマルタイプ。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_NO_CEILING
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 本機は天井非搭載のノーマルタイプで、設定変更によって消去・再セットされるAT天井ゲーム数や規定G数モードは存在しない。
- 朝一の演出モードは設定変更時も「ラッキーモード」。
- ボーナス成立フラグ等の法令・一般仕様からの推測補完は行わず、公開資料で確認できた朝一挙動のみ固定する。

### carryOverBehavior
- 据え置き時に引き継ぐ天井ゲーム数・ATモードはNOT_APPLICABLE（天井/ATモード非搭載）。
- ホール側が設定変更を行わず営業再開した場合の本機固有の朝一特典・不利要素は公開確認なし。

### powerCycleBehavior
- 電源OFF→ONのみの場合も朝一の演出モードはラッキーモード。
- パチ7朝一資料では「設定変更 / 電断のみ」ともラッキーモードと明記。
- ボーナス後100G以内BIG時の楽曲変化について、電断/設定変更による変更判別可否は当時資料で「調査中」のため判別材料へ昇格しない。

### gameCounterReset
- NOT_APPLICABLE_FOR_CEILING。
- 天井機能を搭載しないため、朝一の内部天井ゲーム数リセット/引継ぎという比較対象が存在しない。
- 通常のゲーム表示やボーナス履歴表示機器の挙動は店舗設備側要素を含むため本レコードでは扱わない。

### ceilingAfterReset
- NOT_APPLICABLE。
- HAZUSEおよびパチ7で天井機能なしを確認。
- 設定変更専用の短縮天井も存在しない。

### modeAfterReset
- 内部当選モード/規定G数モード: NOT_APPLICABLE。
- 演出モードは設定変更・電断のみの双方でラッキーモードから開始。
- Lucky/海モードはプレイヤーが切り替え可能な演出選択であり、当選率を管理する内部モードとは扱わない。

### stateAfterReset
- 朝一専用の高確/低確状態やCZ状態は本機の公開ゲーム性上NOT_APPLICABLE。
- 本機固有の「設定変更時のみボーナス当選率が変化する内部状態」等の公開資料は確認なし。

### advantageousSectionReset
- NOT_APPLICABLE_FOR_GAMEPLAY_YARDSTICK。
- 本機はボーナスのみで出玉を増やす6号機ノーマルで、AT/ARTの有利区間進行を朝一客が追うゲーム性ではない。
- 有利区間ランプによる設定変更判別、区間ゲーム数天井、区間リセット恩恵を本機固有仕様として示す公開資料は確認できないため、一般的6号機知識から推測補完しない。

### resetBenefits
- 公開された設定変更専用の天井短縮・高確移行・ボーナス優遇率は確認なし。
- 天井非搭載なので「リセット天井狙い」はNOT_APPLICABLE。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認なし。

### resetDetection
- 朝一演出モードは設定変更・電断のみの双方でラッキーモードのため、演出モード単独では変更判別不可。
- ボーナス後100G以内のBIGで楽曲が変化する仕様はあるが、朝一の楽曲状態を使った設定変更/据え置き判別可否は当時資料で「調査中」。`UNVERIFIED_FOR_RESET_DETECTION` とする。
- 本機固有ガックン条件/発生率、リール始動挙動による変更確定条件は、機種名・型式・メーカー名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で再探索しても高信頼な直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更専用モード振り分け: NOT_APPLICABLE / 公開値なし。
- リセット短縮天井: NOT_APPLICABLE（天井非搭載）。
- 朝一特定G以内の設定変更専用ボーナス当選率: 公開確認なし。
- 設定変更専用恩恵発生率: 公開確認なし。
- 朝一演出モード: 設定変更=ラッキーモード / 電断のみ=ラッキーモード（数値ではなく公開状態契約）。

## resetBehavior 再探索メモ
2026-09-12。`S Lucky海物語 / Lucky海物語 / ラッキー海物語 / SLucky海物語KH / 0S0887 / 三洋 / SANYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 有利区間 / ランプ / 楽曲` を組み替え、HAZUSE、パチ7、1geki、K-Navi、パチビー、必勝本系、Amusement Japan、P-WORLD、PiDEA等を横断。天井非搭載は複数資料で一致。パチ7は設定変更と電断のみ双方の朝一演出モードがラッキーモードと明記。楽曲変化を利用した変更判別は当時「調査中」のままで、後発高信頼資料でも確定条件を固定できなかった。ガックン・有利区間ランプの本機固有契約も直接資料を確認できず、推測補完しない。

## conflicts
- baseGamesPer50は必勝本系41.4G/50枚、複数二次資料は約41G/50枚の丸め差。実質競合ではなく精度差として41.4Gをcanonicalに採用。
- 1gekiのベース欄は「現在調査中」だが、別系統資料に具体値があるため情報充足差として扱う。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 楽曲変化を用いた設定変更/据え置き判別の確定契約: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプによる本機固有の変更判別契約: NO_DIRECT_PUBLIC_MACHINE_SPEC_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://hazuse.com/machine/pachislot/0S0887/
- https://hazuse.com/machine/pachislot/0S0887/genre/203/
- https://hazuse.com/machine/pachislot/0S0887/genre/208/
- https://www.pachibee.jp/machines/index/220110004
- https://hisshobon.news/uncategorized/3210/
- https://1geki.jp/slot/s_luckyumi/
- https://1geki.jp/slot/s_luckyumi/1/
- https://1geki.jp/slot/s_luckyumi/4/
- https://p-kn.com/slot/3505/
- https://pachiseven.jp/machines/6183/cutout/3
- https://www.amusement-japan.co.jp/article/detail/10001988/
- https://news.p-world.co.jp/articles/14976/amusement
- https://www.pidea.jp/articles/1604308101

## reliability
- identity/release/formalModel: DATABASE_HIGH / INDUSTRY
- payout/bonus probabilities: ANALYSIS_HIGH
- baseGamesPer50: ANALYSIS_HIGH
- basicPayout: INDUSTRY / ANALYSIS_HIGH
- resetBehavior: ANALYSIS_HIGH for no-ceiling and morning display-mode contract; UNVERIFIED only for machine-specific gakkun/music-reset-detection/advantageous-section-lamp items noted above
