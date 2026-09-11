更新日: 2026-09-11

## 現在地点
- recordCount: **1320**
- latestRecordAdded: **パチスロ トータル・イクリプス2 — No.1320**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-02_total-eclipse2.md`
- chronologicalFrontier: **2019-12-02**
- frontierLatestMachine: **パチスロ トータル・イクリプス2 — No.1320**
- schema: **resetBehavior v0.7**
- status: **2019_12_02_GROUP_OPEN_3_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1319「天下布武4」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- main上で「パチスロ トータル・イクリプス2」の既存レコードなしを確認し、12/02群の未処理先頭を **No.1320** として追加。
- 性能コア＋resetBehavior v0.7を収集。SANKYO公式博物館、当時業界記事、HAZUSE、1geki、当時攻略系を横断。
- 遡及QAはGodzillaの次のGit追加順を再計算し、未formalizedだった **ミスターマジックネオ**を現行v0.7へ正式化。性能側`coreStatus: PARTIAL`は維持。
- 12/02群は既知6機。今回3機目まで処理済み、残り3機。

## No.1320 — パチスロ トータル・イクリプス2
- manufacturer: **SANKYO**
- formalModel: **`Sトータル・イクリプス2R`**
- certificationNumber: **`9S0862`**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 疑似ボーナス+CZ+ST型AT**
- payout: **96.7 / 98.4 / 100.4 / 103.9 / 106.9 / 111.0%**
- 疑似ボーナス: **1/331 / 325 / 302 / 271 / 246 / 118**
- AT初当たり: **1/734 / 698 / 623 / 516 / 440 / 174**
- CZ: **1/182 / 180 / 177 / 174 / 166 / 89**
- base: **約50.8G/50枚**（約51G表記は丸め差）
- 純増: **約2.7枚/G**
- basic performance: 出撃ボーナス30G / AT「サバイバルタイム」1セット最大30G / 「シューティングチャンス」10～50G / 最大継続率約96.4%
- 天井: **有利区間移行後777Gで疑似ボーナス**。AT確定天井ではない。
- coreStatus: **COMPLETE_CORE**

### resetBehavior v0.7 — No.1320
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_DISPLAY_VS_INTERNAL_POINT_DISTINCTION**
- 設定変更: **天井RESET / 内部モード再抽選 / 内部状態RESET・再抽選**。
- 据え置き: **天井・内部モード・内部状態・内部ポイントCARRY_OVER**とする当時朝一解析。
- 純電源OFF→ON: 当時資料では「据え置き」と同列で **天井・モード・状態・内部ポイントCARRY_OVER**。無電断据え置きとの独立比較一次資料は未固定。
- 朝一の見た目ポイント表示は設定変更/据え置きにかかわらず0から。**据え置きでは内部ポイントを引き継ぐ**ため、極端に早い999pt到達は据え置き示唆になり得る。
- 設定変更専用の固定短縮天井は **なし確認**。公開最深は有利区間移行後777G。
- 有利区間ランプ単独での朝一変更判別は不可とする攻略資料あり。
- 本機固有ガックン発生率/確定条件、設定変更専用モード振り分け、朝一特定G当選率は十分再探索しても未固定。

## No.1320 品質メモ / CONFLICT
- 導入日はSANKYO公式2019.12、HAZUSE/1geki/複数DBが **2019-12-02** で一致。一方、2019-10-25業界記事は事前予定として12/9表記。実導入資料を優先し12/2をcanonical、12/9は予定差として保持。
- 朝一ステージ名は二次資料間で「リルフォート歓楽街」「ユーコン基地」の表記差があるため変更判別には採用しない。
- ベース50.8G / 約51Gは丸め精度差。
- 導入台数5,000/6,000/8,000台の差は必須収集対象外のためcanonical化しない。

## 2019-12-02群 — OPEN
1. **喰霊-零- 運命乱～うんめいのみだれ～** — No.1318 / 処理済み。
2. **天下布武4**（セブンリーグ） — No.1319 / 処理済み。
3. **パチスロ トータル・イクリプス2**（SANKYO） — No.1320 / **処理済み**。
4. **マジカルハロウィン7**（コナミアミューズメント） — 未処理。
5. **ルパン三世～イタリアの夢～**（平和） — 未処理。
6. **ドリームクルーン2**（オーイズミ） — 未処理。

群完了後、全メーカー/別型式/別スペック/PB/地域差を横断してCLOSED判定する。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。P-WORLDで2019-12-02時点の機種DB掲載は確認済みだが、具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- 11/06～12/01の追加機、PB、地域差、別型式は新証拠が出た場合のみ遡及追加。
- 並行更新対策として、毎回mainの同名ファイル存在確認後にcreate/updateする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_godzilla-pachislot-wars.md`: 既formalizedのため再処理せず通過。
- `2007-03_mister-magic-neo.md`: **今回formalize完了**。
  - 既存`coreStatus: PARTIAL`維持。
  - resetBehaviorVersion: v0.7
  - resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
  - 通常時ゲーム数天井非確認 / 有利区間制度前を固定。
  - 設定変更/据え置き/純電断の機種固有内部契約、ガックン/初期出目等の変更判別、公開朝一数値は資料系統変更後も固定できず、一般5号機挙動から補完しない。
- Git追加順で次の未formalized候補は **`2007-03_wild7.md`（ワイルド7）**。main上で現在`resetBehaviorQA: PARTIAL`を確認済み。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1320を再取得。
2. 12/02群の既存有無を再検索し、未処理先頭 **`マジカルハロウィン7`** を **No.1321候補** として性能コア＋resetBehavior v0.7を収集。
3. 続けて `ルパン三世～イタリアの夢～ → ドリームクルーン2` の順で進行。
4. 6機完了後に2019-12-02群を全メーカー/別型式/別スペック/PB/地域差まで横断監査しCLOSED可否を判定。
5. 遡及QAは **`2007-03_wild7.md`** から継続し、既formalizedなら重複編集せず次へ進む。

## 主要出典 — 取得日 2026-09-11

### No.1320 パチスロ トータル・イクリプス2
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/899/
- Amusement Japan/P-WORLD: https://news.p-world.co.jp/articles/12101/amusement
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/12085/yugitsushin
- HAZUSE: https://hazuse.com/machine/pachislot/9S0862/
- 1geki 機種概要: https://1geki.jp/slot/s_te2/
- 1geki 初当たり: https://1geki.jp/slot/s_te2/1/
- 1geki AT概要: https://1geki.jp/slot/s_te2/81/
- スロぱちクエスト 天井/朝一: https://www.slopachi-quest.com/article/muvluv-alternative-total-eclipse2-tennjou/
- スロットセブン 天井/朝一: https://slot-seven.com/totaleclipse2-tenzyou/
- ぱちんこキュレーション: https://pachinko-curation.com/4580/

### 遡及QA — ミスターマジックネオ
- K-Navi業界ニュース: https://p-kn.com/topics/news/164/
- グリーンべると: https://web-greenbelt.jp/00004077/
- グリーンべると導入支援記事: https://web-greenbelt.jp/00004081/
- HAZUSE旧解析: https://hazuse.com/i/data/neomagic/top.htm
- pacnk: https://pacnk.com/slot/tools/sh_misutamajikeo.html
- MediaWorld実機シミュレータ資料: https://mediaworld.co.jp/products/10403007001
