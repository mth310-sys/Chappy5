# パチスロ バイオハザード7 レジデント イービル

No: 1390
machineName: パチスロ バイオハザード7 レジデント イービル
machineNameVariants: パチスロ バイオハザード7 レジデント イービル / BIOHAZARD 7 resident evil / バイオ7 / Sバイオハザード7XE
manufacturer: アデリオン / 総発売元ユニバーサルエンターテインメント
releaseDate: 2021-02-08
formalModelName: Sバイオハザード7XE
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: AT / ゲーム数上乗せ型AT / 2戦突破型CZ

## identity / release
- ユニバーサルエンターテインメント公式ニュース（2020-12-07）で、アデリオン社製・総発売元ユニバーサルエンターテインメント、2021年2月導入予定を確認。
- グリーンべると当時記事、パチビー、K-Navi、1geki、パチ7でホール導入開始2021-02-08が一致。
- 当時検定通過記事で型式 `Sバイオハザード7XE`、メーカーアデリオンを確認。
- 検定番号は `Sバイオハザード7XE / バイオハザード7 / アデリオン / 検定番号 / 公安委員会 / 型式試験` 等を組み替え、当時検定記事・業界DB・後年型式一覧を再探索したが高信頼の番号を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 99.0% |
| 3 | 100.8% |
| 4 | 105.5% |
| 5 | 108.7% |
| 6 | 111.0% |
- 1geki、パチ7、パチ＆スロ必勝本、なな徹で一致。
- 一部後年単独記事に設定2=99.9%表記があるが、多数の当時/主要解析資料が99.0%で一致するため、単純平均せず99.9%を転記しない。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
主要初当たりは、通常時の入口であるクライマックスバトル（CB）とAT「ハザードラッシュ」（HR）を併記する。

| 設定 | CB初当たり | HR初当たり |
|---:|---:|---:|
| 1 | 1/408.6 | 1/927.7 |
| 2 | 1/393.8 | 1/881.6 |
| 3 | 1/385.7 | 1/812.2 |
| 4 | 1/379.8 | 1/645.7 |
| 5 | 1/373.6 | 1/549.5 |
| 6 | 1/375.5 | 1/473.2 |
- P-WORLD、1geki、パチ7、パチ＆スロ必勝本、なな徹で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50.2G/50枚。
- パチ7、当時解析、マルハン新台案内で一致。P-WORLD系では約50Gの丸め表記。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「ハザードラッシュ」純増: 約5.0枚/G。
- ユニバーサル公式関連発表、P-WORLD、1geki、パチ7、当時業界記事で一致。
- reliability: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- ATは固定枚数型ではなくゲーム数上乗せ型。
- AT突入時は原則「シューティングアタック」または「エヴリンインパクト」から開始。
- シューティングアタック: 8G+α、初回AT突入時平均上乗せ81.0G（設定1）。
- エヴリンインパクト: 8G+α、初回AT突入時平均上乗せ140.1G（設定1）。
- 初期特化ゾーン振り分けは設定1でシューティングアタック98.2% / エヴリンインパクト1.8%。
- 固定の「AT1回平均獲得枚数」を性能コアのcanonical値として高信頼複数資料で固定できなかったため、推測換算せず上記の初期G性能を比較値として保持。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数でCBを目指し、通常A / 通常B / 通常C / 天国の4モード。
- モード別天井: 通常A 753G / 通常B 603G / 通常C 503G / 天国 153G。
- 通常Bは400G以内のCB当選が約80%、天国は選択率33%以上・150G以内のCB当選が特徴。
- 有利区間移行時にMDA（モールデッドアタック）ストックを1個獲得する仕様が公開されている。
- AT終了時の条件成立で有利区間を引き継ぐ場合があり、その際は特別モードへ移行して最大293GまでにCB/AT当選。これは朝一設定変更専用恩恵ではないため分離して記録する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_PARTIAL_UNVERIFIED
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間RESET。朝一の有利区間ランプは消灯が設定変更（リセット）濃厚とされる。
- 設定変更後は新たな有利区間移行時のモード抽選を受け、天井進行も新しい有利区間基準で開始する。
- 設定変更専用の短縮天井は確認されず、モードに応じ通常A 753G / B 603G / C 503G / 天国153Gが適用される。
- 有利区間移行時はMDAストック1個を獲得する。これは設定変更専用ではなく有利区間移行時共通の挙動。

### carryOverBehavior
- 朝一有利区間ランプ点灯は据え置き濃厚とされ、有利区間継続状態を客側から推測できる。
- 据え置き時の天井進行・内部モードを独立した本機専用比較表で「引継ぎ」と明記する高信頼資料は、検索語と資料系統を変えた今回の再探索では固定できなかった。
- したがって有利区間ランプの据え置き示唆は保存するが、天井G・モードの個別CARRY_OVER契約は推測で補完せず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の、天井G数・内部モード・バイオポイント/アイテム・有利区間状態を本機専用に一覧化した高信頼直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- `バイオハザード7 / バイオ7 / Sバイオハザード7XE` と `電源OFF ON / 電断 / 据え置き / 朝一 / リセット / 天井引継ぎ / モード引継ぎ / 有利区間` を組み替え、1geki、なな徹、パチ7、P-WORLD、当時攻略サイト、旧DB、回顧資料を横断したが、本機固有の純電断契約を高信頼で固定できなかった。
- 後継機や他バイオ機の電断仕様は本機へ転記しない。

### gameCounterReset
- 設定変更: 新たな有利区間開始となるため、規定ゲーム数/天井進行はRESETとして扱う。
- 据え置き: 本機固有の直接比較表を固定できず、個別CARRY_OVER表記は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認できない。
- 新規有利区間のモード別天井は通常A 753G / 通常B 603G / 通常C 503G / 天国153G。
- AT終了後などで有利区間を引き継いだ「特別モード」は最大293Gだが、これは設定変更後ではなく区間引継ぎ時の別仕様。

### modeAfterReset
設定変更後を含む有利区間移行時の通常成立役時モード移行率が設定別で公開されている。

| 設定 | 通常A | 通常B | 通常C | 天国 |
|---:|---:|---:|---:|---:|
| 1 | 30.3% | 18.7% | 17.8% | 33.2% |
| 2 | 26.1% | 18.7% | 20.7% | 34.5% |
| 3 | 23.9% | 18.6% | 21.8% | 35.7% |
| 4 | 19.7% | 20.6% | 23.1% | 36.6% |
| 5 | 16.7% | 21.3% | 24.3% | 37.7% |
| 6 | 12.6% | 24.7% | 24.8% | 37.9% |

- 有利区間移行1G目が弱レア役なら A17.2 / B16.4 / C16.4 / 天国50.0%、強チャンス目なら B25.0 / C25.0 / 天国50.0%、強チェリーなら C50.0 / 天国50.0%（全設定共通）。
- これは「設定変更専用テーブル」ではなく、有利区間移行時共通の公開値。設定変更後は区間RESETを伴うため朝一比較に利用できるが、定義を混ぜない。

### stateAfterReset
- 通常A/B/C/天国という規定G数モードの再抽選は上記の通り。
- これとは別の独立した低確/高確等について、設定変更専用の初期状態振り分けを高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- MDAについては有利区間移行時に1個ストックを獲得し、MDA終了後はMDA高確ステージへ移行する公開仕様を確認。ただし設定変更専用の独立状態表ではない。

### advantageousSectionReset
- 設定変更: RESET / 朝一ランプ消灯がリセット濃厚。
- 通常時は有利区間移行後にランプ点灯。
- CZ失敗時・AT終了後にランプ消灯するが、AT終了後は条件により有利区間引継ぎがあり得る。
- 有利区間引継ぎ時は特別モードに移行し、最大293G、アイテム「ラストチャンス」獲得などの優遇がある。設定変更時とは別契機。

### resetBenefits
- 設定変更で新しい有利区間へ移行するため、設定別モード抽選を受ける。通常成立役でも天国選択率33.2～37.9%。
- 有利区間移行時にMDAストックを1個獲得する。
- 有利区間移行1G目がレア役ならモード抽選が優遇され、弱レア役/強チャンス目/強チェリーでは天国50.0%。
- 上記2点は「設定変更だけの専用恩恵」ではなく、有利区間移行時共通の仕様として定義分離する。
- 設定変更専用の天井短縮は確認できない。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。
- 天国は33%以上だが、必ず浅いモードになるわけではなく、通常Aも設定1で30.3%選択される。

### resetDetection
- 有利区間ランプによる朝一判別が主要材料。
- 朝一点灯: 据え置き濃厚。
- 朝一消灯: 設定変更（リセット）濃厚。
- ただし前日が消灯状態でヤメられた場合、CZ/AT終了直後、店舗側が回す等の対策があり得るため絶対確定条件にはしない。
- 本機固有のリールガックン条件・発生率は、機種名/型式名/メーカー名と `ガックン / リール / 設定変更 / 朝一 / 1G目` を組み替えて再探索したが高信頼直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 新規有利区間のモード別天井: **753 / 603 / 503 / 153G**。
- 有利区間移行時の通常成立役時・天国選択率: **設定1 33.2% → 設定6 37.9%**。
- 全設定のモード表: **A 30.3→12.6 / B 18.7→24.7 / C 17.8→24.8 / 天国33.2→37.9%**。
- 有利区間移行1G目の弱レア役・強チャンス目・強チェリー成立時: **天国50.0%**。
- 有利区間移行時MDAストック: **1個**。
- 設定変更専用の短縮天井、設定変更専用に限定された別モードテーブル、朝一特定G以内の総合CB当選率は高信頼公開値を固定できず、推定しない。

## resetBehavior 再探索メモ
2026-09-12。`パチスロ バイオハザード7 レジデント イービル / BIOHAZARD 7 resident evil / バイオ7 / Sバイオハザード7XE / アデリオン / ユニバーサル` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 753G / モード / モード移行率 / 有利区間 / 有利区間ランプ / ガックン / MDA` を組み替え、メーカー公式、業界記事、P-WORLD当時ページ、1geki、なな徹、パチ7、必勝本、期待値見える化、イチカツ、旧攻略DB、後年回顧資料を横断。設定変更時の有利区間RESET、ランプ判別、モード別天井、有利区間移行時モード表・MDAストックは複数系統で確認。純電源OFF→ONの本機専用契約、据え置き時の天井/モード個別引継ぎ表、本機固有ガックンは十分な再探索後も高信頼資料を固定できずUNVERIFIEDとした。

## conflicts
- payoutRate setting2: 主要解析・当時資料は99.0%で一致する一方、一部後年単独記事に99.9%あり。平均せず、canonicalは複数一致の99.0%。
- certificationNumber: 検定通過と型式 `Sバイオハザード7XE` は確認済みだが検定番号自体を高信頼で固定できずUNVERIFIED。
- generation表記: P-WORLD等は広義の「6号機」、当時新台案内では「6.1号機」。包含関係の分類差として、本DBではより細かい6.1号機をgenerationに採用しCONFLICT扱いしない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehaviorの本機専用直接契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井G/内部モード個別CARRY_OVER表: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の独立した低確/高確初期振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12

### 公式 / 業界 / 当時資料
- https://www.universal-777.co.jp/news/20201207001491/ — ユニバーサルエンターテインメント公式発売告知、アデリオン製、2021年2月予定（OFFICIAL）
- https://web-greenbelt.jp/post-42692/ — ティザー公開・カプコン×ユニバーサル第1弾（INDUSTRY）
- https://web-greenbelt.jp/post-44023/ — 2021-02-08ホール導入開始（INDUSTRY）
- https://p-media.info/post-25697/ — 型式Sバイオハザード7XE、検定通過（INDUSTRY）
- https://opt.p-world.co.jp/machine/database/9303 — 2020-12-11時点機種情報、AT/天井/ゲーム性（DATABASE_HIGH）

### 解析 / DB
- https://1geki.jp/slot/s_bh7/ — スペック・導入日・純増（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/3/ — モード別天井（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/6/ — 有利区間ランプ/朝一判別（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/44/ — 通常時モード（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/82/ — シューティングアタック平均81.0G（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/83/ — エヴリンインパクト平均140.1G（ANALYSIS_HIGH）
- https://1geki.jp/slot/s_bh7/88/ — 有利区間引継ぎ/特別モード（ANALYSIS_HIGH）
- https://nana-press.com/kaiseki/machine/105/2469/ — CB/AT確率・機械割（ANALYSIS_HIGH）
- https://nana-press.com/kaiseki/machine/105/2474/ — モード別天井（ANALYSIS_HIGH）
- https://nana-press.com/kaiseki/machine/105/2586/ — 有利区間移行時モード移行率（ANALYSIS_HIGH）
- https://pachiseven.jp/machines/6216/cutout/2 — スペック/50枚ベース/導入日（ANALYSIS_HIGH）
- https://p.hisshobon.jp/machine/3585/1/80396 — 基本スペック（ANALYSIS_HIGH）
- https://p.hisshobon.jp/machine/3585/1/80728 — モード/規定ゲーム数（ANALYSIS_HIGH）
- https://slotjin.com/tenjoukitaichi/biohazard7/ — 当時朝一・モード・有利区間整理（ANALYSIS_SINGLE）
- https://ichikatsu.com/biohazard7/ — 当時天井/ゾーン整理（ANALYSIS_SINGLE）

## confidence
- identity/release: OFFICIAL / INDUSTRY
- core specs: ANALYSIS_HIGH
- reset advantageous-section / lamp / mode numeric data: ANALYSIS_HIGH
- powerCycle / dedicated carry-over table / gakkun: UNVERIFIED

## relay
- Added as No.1390.
- 2021-02-08 group status: OPEN_1_OF_5_KNOWN_PROCESSED.
- Next candidate: **パチスロ フレームアームズ・ガール — No.1391候補**。
