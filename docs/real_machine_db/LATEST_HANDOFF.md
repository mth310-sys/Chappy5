更新日: 2026-09-09

## 現在地点
- recordCount: **1040**
- latestRecordAdded: **パチスロ エウレカセブンAO**（サミー / Sammy）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-16_eureka-seven-ao.md`
- chronologicalFrontier: **2017-01-16**
- frontierLatestMachine: **パチスロ エウレカセブンAO — No.1040**
- schema: **resetBehavior v0.7**
- status: **2017-01-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-17_TO_2017-01-29_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-30_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1039実レコードを再取得して開始。
- main正本は **1039件 / chronologicalFrontier 2017-01-10 / 1/09〜10群CLOSED / 1/11〜15境界CLOSED / 1/16群OPEN**。旧INDEXの19件表示は進捗正本にせず、README規定どおりより新しい `LATEST_HANDOFF.md` と実レコードを優先した。
- handoff指定の次未処理 **サミー「パチスロ エウレカセブンAO」** をNo.1040として登録。
- サミー公式、公安委員会告示、P-WORLD/パチビー、HAZUSE、当時解析を横断し、性能コアとresetBehavior v0.7を同時収集。
- 2017-01-16群を再監査。2-9伝説の導入カレンダーは同日を **エウレカセブンAO** のみ列挙し、登録済みのため **2017-01-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 同カレンダーの次の掲載導入日は **2017-01-30**。1/17〜1/29について「新台/パチスロ/導入日/メーカー」等の検索語・資料系統を変えて再探索しても全国導入本線の未登録機を固定できなかったため **2017-01-17_TO_2017-01-29_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## No.1040 — パチスロ エウレカセブンAO
- manufacturer: **サミー（Sammy）**
- releaseDate canonical: **2017-01-16**
- formalModelName: **エウレカセブンAO/XS**
- certificationNumber: **6S0834**
- generation/system: **5号機 / 5.5号機期 / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.5 / 99.3 / 102.1 / 105.2 / 110.1 / 115.7%**。
- ボーナス合算: **1/248.2 / 246.4 / 237.4 / 233.2 / 222.9 / 214.9**。
- ART初当たり: **1/327.9 / 321.0 / 311.3 / 286.2 / 261.3 / 221.2**。
- CZ「シークレットバトル」: **1/208.5 / 202.8 / 195.7 / 174.7 / 155.7 / 138.9**。
- baseGamesPer50: **約32G/50枚**。
- ART「アストラルオーシャン」純増: **約1.4枚/G**。ボーナス込み実効表記は約1.9枚/Gとして別定義保持。
- BIG/EPISODE BONUS: **約204枚**。
- REG/クォーツボーナス/BAR揃い: **約36枚**。
- 通常天井: **ボーナス間900GでART**。途中ARTではボーナス間天井進捗をリセットしない。

### resetBehavior v0.7
- settingChangeBehavior: **天井進捗RESET / 内部状態RESELECT / RT状態を非RTへRESET / 液晶は居住区**。
- carryOverBehavior: **据え置きは天井進捗・内部状態・RT状態CARRYOVER**。液晶は居住区へ見た目上統一。
- powerCycleBehavior: **純電源OFF→ONは天井進捗・内部状態・RT状態CARRYOVER**。一方、獲得枚数表示・解放楽曲・BIG中ストーリー紹介等の表示/履歴系はリセットされる資料があり、内部状態と分離保存。
- gameCounterReset: 設定変更RESET / 据え置きCARRYOVER / 純電断CARRYOVER。
- ceilingAfterReset: 通常900G天井。設定変更専用固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 朝一専用ゲーム数モード/短縮モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: 設定変更時に通常/高確/超高確を再抽選。公開表では設定1〜3が通常75.0%・高確21.1%・超高確3.9%（高確以上25.0%）、設定4〜6が通常71.1%・高確21.1%・超高確7.8%（高確以上28.9%）。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 上記の高確以上スタート率。固定短縮天井/CZ確定/ART確定は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 前日のボーナス間天井進捗は設定変更で消失。
- resetDetection: **1G目ガックンは設定変更濃厚（対策可能）**。さらに設定変更後は非RTから始まるため、朝一最初のベルこぼし目より前にRT固有リプレイが出れば据え置き濃厚。液晶居住区だけでは判別不可。

### data quality
- 導入日: サミー公式マイスロが2017-01-16を「本日ホール導入日」と明記。パチビー、K-Navi、HAZUSEも一致。
- 型式/検定: 鹿児島県公安委員会告示で **エウレカセブンAO/XS / 6S0834 / サミー株式会社** を確認。
- 性能コア: P-WORLD/パチビー、ちょんぼりすた、すろぱちくえすと、PiDEA等を横断し主要値一致。
- resetBehavior: 設定変更と電源OFF→ONの直接比較表が複数残っており、天井・内部状態・RT状態を分離できる。
- ART初期G数は「20G+QAC獲得分」と「初期40G以上」の表記があるため、内部初期保証と実表示上の開始性能の定義差として分離。平均化・CONFLICT化していない。
- material conflict: **NONE_CONFIRMED**。

## 境界監査
- **2017-01-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2-9伝説2017-01-16列は **エウレカセブンAO** のみ。No.1040で登録済み。
- **2017-01-17_TO_2017-01-29_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い日付境界は **2017-01-30**。
- 2017-01-30群の既知候補: **ユニバーサルブロス「SLOTスターオーシャン4」 / 山佐系「ソウルキャリバー」 / パイオニア「オアシスデイズ」 / エマ「ニューペガサスREVIVAL」**。
- 次回先頭候補は **ユニバーサルブロス「SLOTスターオーシャン4」**。パチビー、K-Navi、ちょんぼりすたで2017-01-30導入を先行確認済み。
- chronologicalFrontier: **2017-01-16**（次機種登録後に1/30へ前進予定）。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1040を再取得。
2. **1040件 / chronologicalFrontier 2017-01-16 / 1/16群CLOSED / 1/17〜29境界CLOSED / 1/30群OPEN** を正本として継続。
3. 次の未処理機種は **ユニバーサルブロス「SLOTスターオーシャン4」** をNo.1041候補として処理。
4. 性能コア＋resetBehavior v0.7を同時収集。周期天井、設定変更/据え置き/純電断、HP/周期状態、朝一恩恵、変更判別を検索語・資料系統を変えて再探索する。
5. スターオーシャン4登録後、2017-01-30群を同日全メーカー横断で継続監査し、ソウルキャリバー / オアシスデイズ / ニューペガサスREVIVAL等を未処理なら順に登録する。
6. 既登録のエウレカセブンAO以前を重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1040 エウレカセブンAO
- サミー公式製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/
- サミー公式製品サイト: https://www.sammy.co.jp/japanese/product/pachislot/2016/eurekaao/sp/feature/
- サミーマイスロ導入日告知: https://www.sammy.co.jp/japanese/myslot/news/index_9.html
- 鹿児島県公報（公安委員会告示）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1609/documents/53970_20160905165545-1.pdf
- P-WORLD: https://www.p-world.co.jp/machine/database/8216
- パチビー: https://www.pachibee.jp/machines/index/216120000
- HAZUSE DATA: https://data.hazuse.com/?detail_id=99229&genre=209&machine_code=6S0834
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/27815/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/eureka-seven-ao/
- 期待値見える化: https://slotjin.com/slot-tool/eurekasevenao-settei/
- スロがち: https://slogati.com/eureka-ao/
- PiDEA: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E3%82%A8%E3%82%A6%E3%83%AC%E3%82%AB%E3%82%BB%E3%83%96%E3%83%B3AO%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 2-9伝説導入カレンダー: https://29den.com/newslot/

### 次回候補 SLOTスターオーシャン4
- パチビー: https://www.pachibee.jp/machines/index/216120004
- K-Navi: https://p-kn.com/slot/2681/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/29639/
