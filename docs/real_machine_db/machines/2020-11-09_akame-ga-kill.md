# アカメが斬る！

No: 1377
machineName: アカメが斬る！
machineNameVariants: Sアカメが斬る！ / S ATアカメが斬る! K / SATアカメが斬る！K / アカメが斬る
manufacturer: 七匠
releaseDate: 2020-11-09
formalModelName: SATアカメが斬る！K
certificationNumber: 9S1271

generation: 6号機
systemType: AT / 擬似ボーナス / ゲーム数管理 / CZ / 有利区間管理

## identity / release
- 1geki 2020年11月新台カレンダーは2020-11-09のスロットを本機1機と掲載。
- パチビー、HAZUSEも導入開始日2020-11-09で一致。
- ちょんぼりすた等には2020-11-09 / 2020-11-16（地域差あり）の表記があるため、全国基準のcanonicalを2020-11-09とし地域差を注記する。
- 2020-05-15付の新潟県公安委員会検定通過を報じた業界記事で型式 `SATアカメが斬る！K` を確認。
- HAZUSEで型式 `SATアカメが斬る！K`、検定番号 `9S1271` を確認。
- reliability: INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.0% |
| 3 | 100.9% |
| 4 | 104.5% |
| 5 | 107.1% |
| 6 | 112.4% |
- HAZUSE、P-WORLD、ちょんぼりすた、Re.design等で一致。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH / INDUSTRY_DATABASE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/542 | 1/687 | 1/303 |
| 2 | 1/523 | 1/681 | 1/296 |
| 3 | 1/489 | 1/676 | 1/284 |
| 4 | 1/454 | 1/687 | 1/273 |
| 5 | 1/421 | 1/684 | 1/260 |
| 6 | 1/410 | 1/682 | 1/256 |
- P-WORLD、ちょんぼりすた、Re.design等で一致。
- reliability: DATABASE_HIGH / ANALYSIS_HIGH

## baseGamesPer50
- 約50.0G/50枚。
- 複数解析・営業系DBで約50G/50枚として一致。
- reliability: ANALYSIS_HIGH / INDUSTRY_DATABASE

## netIncrease
- 擬似ボーナス/AT: 約4.0枚/G。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## basicPayout
- BIG BONUS: 30G、約120枚。
- REG BONUS: 15G、約60枚。
- AT「アカメチャンス」: 1セット30G+α、純増約4.0枚/G、ゲーム数上乗せ型。
- reliability: INDUSTRY / DATABASE_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数とレア役のW抽選で擬似ボーナスを目指す。
- CZは「ナイトレイドチャレンジ」「エスデスゾーン」。
- 有利区間移行後の通常時最大天井は997G消化でボーナス当選。資料によって液晶表記ベースで999G / 996G+αとする表記もあり、非有利区間中も液晶G数が進むため表示上ズレることが明記されている。
- 500G以降のボーナスはボーナス内部状態「高確」の期待度が高く、AT当選率が優遇される解析あり。
- 有利区間継続時はボーナス後最大400G、AT後最大300Gへ規定ゲーム数が短縮される。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- HAZUSEの設定変更&電源ON/OFF表で、設定変更時は **有利区間→非有利区間、天井→リセット、状態→再抽選** と明記。
- DMMぱちタウンはリセット仕様として「高確スタート」と記載。
- したがって本DBでは、設定変更で前日天井G/有利区間/内部状態をそのまま持ち越さず、新しい有利区間開始側へ再構築される挙動をcanonicalとする。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

### carryOverBehavior
- 据え置き相当の純電源OFF→ONでは **有利区間・天井・状態を引き継ぐ**。
- 朝一に有利区間ランプが点灯していれば「据え置き + 前日有利区間引き継ぎ状態」が濃厚とする複数攻略資料あり。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- HAZUSEおよび期待値見える化で、電源OFF→ONのみの場合は **天井G数引き継ぎ / 内部状態引き継ぎ / 有利区間引き継ぎ** が一致。
- 設定変更とは明確に挙動が異なる。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井G数RESET。
- 据え置き/純電断: 天井G数CARRY_OVER。
- 液晶G数は非有利区間でも進むため、内部の有利区間移行後G数と液晶表示に若干のズレが出る場合がある。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更後は有利区間移行から最大997Gでボーナス当選。
- 「設定変更専用の一律短縮天井」は確認できない。
- ただし有利区間継続時は別契約で、ボーナス後最大400G / AT後最大300Gとなる。これは設定変更恩恵ではなく、有利区間引き継ぎ時の短縮として分離して保持する。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時の内部状態は再抽選。
- DMMぱちタウンはリセット後を高確スタートとする。
- 朝一専用モード名や設定別モード振り分けの公開テーブルは、表記揺れ・型式名を含めた再探索後も固定できず `NO_PUBLIC_FULL_MODE_TABLE_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 状態再抽選。
- 据え置き/純電断: 状態引き継ぎ。
- リセット時「高確スタート」とする後発DB記載あり。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

### advantageousSectionReset
- 設定変更: 非有利区間へ移行。
- 据え置き/純電断: 有利区間を引き継ぐ。
- 通常時は基本的に有利区間ランプ消灯型。ボーナス/AT終了後に有利区間を継続した場合はランプ点灯を維持する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- DMMぱちタウンは設定変更後を高確スタートと記載。
- 有利区間リセット後の規定ゲーム数分布は前半にも厚く、200G以内ボーナスの可能性が相応にあるが、これは設定変更専用ではなく「有利区間リセット後」共通の抽選として扱う。
- 有利区間引き継ぎ時の最大400G/300G短縮は客側に強い価値がある一方、これは据え置きでも残り得るため「リセット恩恵」と混同しない。

### resetPenalties
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。
- 前日の有利区間引き継ぎ状態は最大400G/300Gへ短縮されるため、設定変更でその状態を消す場合は、据え置きに比べ客側期待値を失うケースがある。これは前日状態依存の相対的不利として記録し、一律のリセットペナルティとは扱わない。

### resetDetection
- 通常時は基本的に有利区間ランプが消灯するため、**朝一ランプ消灯だけでは設定変更/据え置きを判別できない**。
- 朝一から有利区間ランプが点灯している場合は、据え置きかつ前日有利区間引き継ぎ状態が濃厚。
- ランプ位置はクレジット右上の丸型ランプ。
- 本機固有のガックン発生条件/発生率は、`アカメが斬る / SATアカメが斬る！K / 七匠` と `設定変更 / リセット / 朝一 / 据え置き / ガックン` を組み替えて再探索したが直接値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH_FOR_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData / publicMorningNumbers
- 有利区間リセット後の規定ゲーム数分布（次回REG / 次回BIG）:
  - 0～199G: 34.4% / 28.9%
  - 200～399G: 25.4% / 29.3%
  - 400～599G: 14.1% / 18.8%
  - 600～799G: 21.5% / 18.4%
  - 800～999G: 4.7% / 4.7%
- 上記は「設定変更専用」ではなく、有利区間リセット後共通の規定G抽選としてななプレスが公開しているため、その定義を維持する。
- 有利区間引き継ぎ時の規定G振り分け（ボーナス後 / AT後）:
  - 0～99G: 33.6% / 3.1%
  - 100～199G: 50.0% / 57.0%
  - 200～299G: 12.5% / 39.8%
  - 300～399G: 3.9% / なし
- 設定変更専用のモード振り分け率・ガックン率は `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。

## resetBehavior 再探索メモ
2026-09-11。`アカメが斬る！ / Sアカメが斬る / SATアカメが斬る！K / S ATアカメが斬る! K / 七匠 / NANASHOW` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 高確 / ガックン / 有利区間 / 有利区間ランプ` を組み替え、HAZUSE、1geki、P-WORLD、DMMぱちタウン、ななプレス、期待値見える化、ちょんぼりすた、すろぱちクエスト、パチビー、業界記事、検定通過資料を横断。導入直後の1gekiでは設定変更/電断挙動が調査中だったが、後発HAZUSEと期待値見える化で設定変更=非有利区間/天井RESET/状態再抽選、純電断=引継ぎを直接固定できた。ガックン固有契約と設定変更専用モード振り分けは十分な再探索後も固定できないためUNVERIFIED扱いとする。

## conflicts
- releaseDate: 2020-11-09を1geki月間カレンダー、パチビー、HAZUSE等が採用。一部解析は2020-11-16または11/9・11/16地域差ありと記載。本DBは2020-11-09をcanonical、11/16を地域差注記として保持。
- ceiling display: HAZUSE/1gekiは有利区間移行後997G、一般攻略は液晶基準999G、Re.design営業DBは996G+α。非有利区間中も液晶G数が進む説明があるため、内部契約は「有利区間移行後997G」、液晶上の実戦目安は999G前後として定義差を保持し平均化しない。

## missingFields
- 設定変更専用モード振り分け率: NO_PUBLIC_FULL_TABLE_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一当選率: NO_DIRECT_PUBLIC_VALUE_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://1geki.jp/newmachinecalender/202011/
- https://1geki.jp/slot/s_akame/3/
- https://hazuse.com/machine/pachislot/9S1271/genre/201/
- https://hazuse.com/machine/pachislot/9S1271/genre/207/
- https://hazuse.com/machine/pachislot/9S1271/genre/205/
- https://www.p-world.co.jp/machine/database/9258
- https://p-town.dmm.com/machines/3767
- https://nana-press.com/kaiseki/machine/87/2086/
- https://slotjin.com/tenjoukitaichi/akame/
- https://chonborista.com/slot/nanashow/120005/
- https://www.slopachi-quest.com/article/akamegakill-tenjjou/
- https://www.pachibee.jp/machines/about/220100004
- https://www.pidea.jp/articles/1590108168
- https://news.p-world.co.jp/articles/14779/yugitsushin
- https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2020091516052001

confidenceSummary: core=INDUSTRY_DATABASE_ANALYSIS_HIGH; reset=ANALYSIS_HIGH_WITH_LIMITED_UNVERIFIED; identity=INDUSTRY_DATABASE_HIGH; conflicts=EXPLICIT