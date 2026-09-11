更新日: 2026-09-11

## 現在地点
- recordCount: **1319**
- latestRecordAdded: **天下布武4 — No.1319**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-02_tenka-fubu4.md`
- chronologicalFrontier: **2019-12-02**
- frontierLatestMachine: **天下布武4 — No.1319**
- schema: **resetBehavior v0.7**
- status: **2019_12_02_GROUP_OPEN_2_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1318実レコードを再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- main上で `天下布武4` の既存レコードなしを確認し、12/02群の未処理先頭を **No.1319** として追加。
- 性能コア＋resetBehavior v0.7を収集。メーカー/業界一次、HAZUSE、当時解析、古い攻略DBを横断し、公開朝一モード振り分けまで保存。
- 12/02群は既知6機。今回2機目まで処理済み、残り4機。

## No.1319 — 天下布武4
- manufacturer: **セブンリーグ（山佐販売・ブランド）**
- formalModel: **`S天下布武4HH`**
- certificationNumber: **`9S0899`**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 疑似ボーナス+覚醒高確率ゾーン+完走型AT**
- payout: **97.9 / 99.4 / 100.9 / 104.3 / 107.0 / 111.2%**
- 疑似ボーナス合算: **1/239.2 / 1/221.2 / 1/212.5 / 1/188.7 / 1/176.1 / 1/158.2**
- AT初当たり（公開整理値）: **約1/1267 / 1161 / 992 / 731 / 522 / 283**
- base: **約51.5G/50枚**（約51G表記は丸め差）
- 純増: **疑似ボーナス約3.0枚/G / AT天雅ラッシュ約2.8枚/G**
- basic payout: **天下BONUS平均約120枚 / REG平均約42枚 / AT 1セット30～90G**
- 天井: **通常系768G+前兆、最大803G / 天国136G以内 / 超天国36G以内**。最深部は天下ボーナスで、AT確定ではない。

### resetBehavior v0.7 — No.1319
- 設定変更: **天井RESET / 内部モード再抽選 / 有利区間RESET→非有利区間**。
- 据え置き: **天井・内部モードCARRY_OVER**。
- 純電源OFF→ON: 当時朝一表で据え置きと同列、**天井・内部モードCARRY_OVER**。
- 内部状態: 当時解析表では設定変更時RESET、電断時引継ぎ。ただし低確/高確等の具体開始状態・振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後の専用固定短縮天井: **なし確認**。ただし有利区間移行時のモード再抽選で天国/超天国なら136G/36G以内となる。
- 通常時有利区間ランプ: **実戦上常時消灯**とされ、朝一消灯だけでは変更判別不可。
- ガックン: 設定変更後1G目の動画観察例はあるが、「おそらく有効」止まり。`EMPIRICAL_WEAK_SIGNAL_NOT_DETERMINISTIC`。発生率・確定条件は未固定。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_MODE_DATA**。

### 公開朝一数値 — 有利区間移行時モード
レア役以外の `通常 / 三武将 / 決戦 / 天国+超天国`:
- 設定1: **50.8 / 19.5 / 10.2 / 19.5%**
- 設定2: **32.8 / 40.6 / 5.1 / 21.5%**
- 設定3: **41.0 / 20.3 / 12.5 / 26.2%**
- 設定4: **21.9 / 40.6 / 5.1 / 32.4%**
- 設定5: **28.1 / 20.3 / 10.2 / 41.4%**
- 設定6: **18.4 / 33.2 / 0.4 / 48.0%**

非有利区間中レア役（チェリー/巻物/チャンス目）成立時:
- 設定1: **31.3 / 7.8 / 20.3 / 40.6%**
- 設定2: **14.1 / 25.0 / 7.8 / 53.1%**
- 設定3: **25.0 / 7.8 / 25.0 / 42.2%**
- 設定4: **14.1 / 18.8 / 7.8 / 59.4%**
- 設定5: **12.5 / 3.9 / 20.3 / 63.3%**
- 設定6: **10.2 / 13.3 / 0.8 / 75.8%**
- 天国/超天国の内訳は公開表で不明。推定補完しない。

## No.1319 品質メモ / CONFLICT
- メーカー表記は「山佐」「セブンリーグ」が混在。当時業界記事で **セブンリーグ製・山佐リリース/販売**を固定し、役割を分離。
- 純増3.0枚/Gと2.8枚/Gは疑似ボーナス/ATの区間差でありCONFLICTではない。
- ベース約51G / 約51.5Gは丸め精度差として51.5Gをcanonical。
- 天井768G+α / 最大803Gは規定到達と前兆込み最大値の定義差。
- ガックンは弱い実観察のみ。確定仕様へ格上げしない。

## 2019-12-02群 — OPEN
1. **喰霊-零- 運命乱～うんめいのみだれ～** — No.1318 / **処理済み**。
2. **天下布武4**（セブンリーグ） — No.1319 / **処理済み**。
3. **パチスロ トータル・イクリプス2**（SANKYO） — 未処理。
4. **マジカルハロウィン7**（コナミアミューズメント） — 未処理。
5. **ルパン三世～イタリアの夢～**（平和） — 未処理。
6. **ドリームクルーン2**（オーイズミ） — 未処理。

群完了後、全メーカー/別型式/別スペック/PB/地域差を横断してCLOSED判定する。

## 継続監査
- `プレドキ！`: プレゴ専用PBまでは固定済み。P-WORLDで2019-12-02時点の機種DB掲載は確認済みだが、具体的初回ホール導入日未固定のため未登録継続。本線は止めない。
- 11/06〜12/01の追加機、PB、地域差、別型式は新証拠が出た場合のみ遡及追加。
- 並行更新対策として、毎回mainの同名ファイル存在確認後にcreate/updateする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_godzilla-pachislot-wars.md` はmain上ですでにresetBehavior v0.7 formalized済み。
- 次回以降はGodzillaを再処理せず、Git追加順と `resetBehaviorQA` 状態から次の未formalized実機レコードを再計算する。
- 新規本線を止めない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1319 を再取得。
2. 12/02群の既存有無を再検索し、未処理先頭 **`パチスロ トータル・イクリプス2`** を **No.1320候補** として性能コア＋resetBehavior v0.7を収集。
3. 続けて `マジカルハロウィン7 → ルパン三世～イタリアの夢～ → ドリームクルーン2` の順で進行。
4. 6機完了後に2019-12-02群を全メーカー/別型式/別スペック/PB/地域差まで横断監査しCLOSED可否を判定。
5. 遡及QAは本線と競合しない範囲で次の未formalizedレコードから継続。

## 主要出典 — 取得日 2026-09-11

### No.1319 天下布武4
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10001438/
- DMMぱちタウン業界ニュース: https://p-town.dmm.com/specials/news/1594
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/11938/yugitsushin
- HAZUSE: https://hazuse.com/zh-hant/machine/pachislot/9S0899/
- 1geki: https://1geki.jp/slot/s_tenkafubu4/
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/01/c.php
- パチマガスロマガ モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/01/09-1.php
- 期待値見える化 朝一/有利区間: https://slotjin.com/tenjoukitaichi/tenkafubu4-hyena/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/94841/
- パチ7: https://pachiseven.jp/machines/5875/cutout/3
- SLOT HACK スペック: https://slothack.net/matome/1538/
- SLOT HACK 朝一/ガックン弱信号: https://slothack.net/matome/1554/

### 2019-12-02導入群
- モゲスロ 2019年新台導入日カレンダー: https://moge-site.com/new-slot2019
- パチンコ・パチスロ.com 2019導入日カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 1geki 2019年12月新台スケジュール: https://1geki.jp/newmachinecalender/201912/
