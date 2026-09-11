更新日: 2026-09-11

## 現在地点
- recordCount: **1318**
- latestRecordAdded: **喰霊-零- 運命乱～うんめいのみだれ～ — No.1318**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-02_garei-zero-unmei-no-midare.md`
- chronologicalFrontier: **2019-12-02**
- frontierLatestMachine: **喰霊-零- 運命乱～うんめいのみだれ～ — No.1318**
- schema: **resetBehavior v0.7**
- status: **2019_12_02_GROUP_OPEN_1_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1317実レコードを再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- 2019-11-05群CLOSED後の次群 **2019-12-02** へ前進。
- mainで12/02群先頭 `喰霊-零- 運命乱` の未収録を確認し、性能コア＋resetBehavior v0.7を **No.1318** として追加。
- 12/02群は既知6機。今回1機処理済み、残り5機。

## No.1318 — 喰霊-零- 運命乱～うんめいのみだれ～
- manufacturer: **JFJ**
- formalModel: **`S喰霊零 運命乱JJ`**
- certificationNumber: **`9S0621`**
- releaseDate: **2019-12-02**
- generation/system: **6号機 / AT / 周期CZ→疑似ボーナスAT / 引き戻しゾーン**
- payout: **97.5 / 99.2 / 100.9 / 102.9 / 105.2 / 108.8%**
- AT初当たり: **1/349.7 / 1/315.7 / 1/290.3 / 1/252.1 / 1/213.1 / 1/168.3**
- base: **約49.9～51.4G/50枚**
- 純増: **疑似ボーナス約4.0枚/G / ナビ有り微増区間約0.8枚/G**
- basic payout: **赤7 20G約80枚 / 青7 30G約120枚 / EPISODE BONUS 30G約120枚**
- 天井: **零カウンター最大20周期**。1周期平均約38G、実ゲーム換算資料は約750～760G。

### resetBehavior v0.7 — No.1318
- 設定変更: **天井/周期RESET、有利区間RESET**。学校ステージ開始、零カウンター非表示。
- 据え置き / 純電源OFF→ON: **天井/周期・有利区間CARRY_OVER** とする解析。学校ステージ/零カウンター非表示は設定変更時と共通。
- 設定変更専用の短縮天井: **なし確認**。最大20周期。
- 零カウンターシナリオは **有利区間セット時に抽選**。設定変更専用のシナリオ振り分け値とは扱わない。
- 朝一特別恩恵: 当時攻略資料では **特になし**。
- リセット判別: 当時攻略資料は **不可** と整理。通常時有利区間ランプ消灯タイプ、学校ステージ・零カウンター非表示も両条件共通。
- 内部状態（低確/高確等）の設定変更/据え置き/純電断直接契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン契約/率も `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_INTERNAL_STATE**。

## No.1318 品質メモ / CONFLICT
- JFJ公式のAT初当たりは整数丸め（1/349→1/168）、HAZUSEは精密値（1/349.7→1/168.3）。定義競合ではなく丸め精度差のため精密値をcanonical。
- 天井の実ゲーム換算は **約750G vs 約760G** の資料差。管理単位本体の **20周期** は一致するため20周期をcanonical、G数は参考レンジ。
- 天井失敗時のCZ呼称に **零チャレンジ / 喰霊チャンス** の表記差があるため平均化・統合せず注記。AT確定天井ではない。

## 2019-12-02群 — OPEN
1. **喰霊-零- 運命乱～うんめいのみだれ～** — No.1318 / **処理済み**。
2. **天下布武4**（セブンリーグ） — 未処理。
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
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1318 を再取得。
2. 12/02群の既存有無を再検索し、未処理先頭 **`天下布武4`** を **No.1319候補** として性能コア＋resetBehavior v0.7を収集。
3. 続けて `パチスロ トータル・イクリプス2 → マジカルハロウィン7 → ルパン三世～イタリアの夢～ → ドリームクルーン2` の順で進行。
4. 6機完了後に2019-12-02群を全メーカー/別型式/別スペック/PB/地域差まで横断監査しCLOSED可否を判定。
5. 遡及QAは本線と競合しない範囲で次の未formalizedレコードから継続。

## 主要出典 — 取得日 2026-09-11

### No.1318 喰霊-零- 運命乱
- JFJ公式: https://www.fujimarukun.co.jp/products/s-garei0/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0621/
- HAZUSE基本: https://hazuse.com/machine/pachislot/9S0621/genre/201/
- HAZUSE AT/解析: https://hazuse.com/machine/pachislot/9S0621/genre/209/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_garei0/3/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/95569/
- スロパチくえすと: https://www.slopachi-quest.com/article/gareizero2-unnmei-tennjou/

### 2019-12-02導入群
- モゲスロ 2019年新台導入日カレンダー: https://moge-site.com/new-slot2019
- パチンコ・パチスロ.com 2019導入日カレンダー: https://pachinkopachisro.com/archives/52807194.html
- 1geki 2019年12月新台スケジュール: https://1geki.jp/newmachinecalender/201912/
