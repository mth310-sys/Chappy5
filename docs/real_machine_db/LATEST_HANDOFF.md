更新日: 2026-09-11

## 現在地点
- recordCount: **1333**
- latestRecordAdded: **パチスロ 青鬼 — No.1333**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-02-03_pachislo-aooni.md`
- chronologicalFrontier: **2020-02-03**
- frontierLatestMachine: **パチスロ 青鬼 — No.1333**
- schema: **resetBehavior v0.7**
- status: **2020-02-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1332「パチスロ 花伝」を再取得してから継続。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 2020-01-21〜02-02境界を再確認し、直前handoff指定の **2020-02-03「パチスロ 青鬼」**をNo.1333として追加。
- 性能コアとresetBehavior v0.7を同時収集。最初の欠損で止めず、`パチスロ 青鬼 / 青鬼 / S青鬼L4 / S青鬼ver1.000L4 / Sパチスロ青鬼ver1.000L4 / オリンピア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 有利区間 / ランプ / ガックン / オワリノハジマリ` を組み替え、当時解析・旧DB・機種DB・検定通過整理を横断。
- 1geki 2020年2月新台カレンダーは2020-02-03のスロットを **青鬼1機**として掲載。別系統検索でも同日追加独立パチスロ候補を固定できなかったため **2020-02-03_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とする。
- 次の同カレンダー確認済みスロット導入日は **2020-02-17「SLOTバジリスク～甲賀忍法帖～絆2」**。

## No.1333 — パチスロ 青鬼
- path: `docs/real_machine_db/machines/2020-02-03_pachislo-aooni.md`
- manufacturer: **オリンピア**
- formalModel: **`Sパチスロ青鬼ver1.000L4`**
- certificationNumber: **PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH**
- releaseDate: **2020-02-03**
- generation/system: **6号機 / AT / CZ経由型 / 高純増セットストック型**
- payoutRate: **97.4 / 99.0 / 101.1 / 105.5 / 108.5 / 109.7%**
- ラストジャッジ(CZ): **1/444.1 / 440.8 / 438.4 / 427.7 / 409.0 / 392.6**
- AT「超鬼ごっこ」: 設定1 **約1/2400** / 設定6 **約1/400**。設定2〜5は公開確定値を固定できず推測補完しない。
- base canonical: **約52.1G/50枚**。約52G、52.6〜53.3G表記は定義/設定差/丸め差としてCONFLICT注記。
- netIncrease: **約8.0枚/G**
- 青鬼BIG BONUS: **約160枚**
- 天井: **有利区間移行後444G+αでCZ「ラストジャッジ」**。

### resetBehavior v0.7 — No.1333
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_INTERNAL_STATE**
- 設定変更: **有利区間RESET / 天井G RESET**。新有利区間開始時は **必ず「オワリノハジマリ」へ移行**。
- 据え置き: **有利区間・内部天井進行CARRY_OVER**。
- 純電源OFF→ON: **有利区間CARRY_OVER**。有利区間に紐づく内部天井進行も引継ぎ。
- 内部状態・液晶ステージ: 当時1geki資料自体が設定変更/電断とも「現在調査中」。後続再探索でも本機固有の確定契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井は確認できず。新有利区間の通常契約として **444G+α**。
- modeAfterReset / resetBenefits: 有利区間開始時の「オワリノハジマリ」突入は固定。設定変更専用の内部モード振り分け、平均減算pt、朝一特定G以内AT当選率は公開確定値なし。
- resetDetection: 朝一「オワリノハジマリ」は設定変更方向、開始しなければ据え置き方向の主要材料。有利区間ランプも補助材料。本機固有ガックン条件/率は再探索後も未固定。
- publicMorningNumbers: **有利区間開始時オワリノハジマリ突入100% / 最深天井444G+α**。

## No.1333 品質注記 / CONFLICT
- formalModelは検定通過整理・当時解析で `Sパチスロ青鬼ver1.000L4` / `S青鬼ver1.000L4` / `S青鬼L4` の表記揺れあり。canonicalはフル表記 `Sパチスロ青鬼ver1.000L4`。
- 公開検定番号は今回の横断検索で高信頼資料を固定できず、型式から推測しない。
- 50枚ベースは **約52.1G**をcanonicalとし、約52G / 約52.6〜53.3Gも出典付きで保持。平均化しない。
- ちょんぼりすた本文に導入日「2019年2月3日」の年誤記が残る一方、1geki・パチビー・当時解析は **2020-02-03**で一致するため2020-02-03をcanonical。

## 2020-02-03群監査
- **パチスロ 青鬼 — No.1333 処理済み**。
- 1geki 2020年2月カレンダーでは2/3のパチスロは青鬼1機。同日全メーカー/別型式/別スペック/PB/地域差も検索したが追加独立候補を固定できず。
- 判定: **CLOSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 今回は本線No.1333追加と2/3群監査を優先し、遡及QAは進めていない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1333を再取得。
2. 2020-02-04〜02-16境界を全メーカー/PB/地域差/別型式で再監査。
3. 次の確認済み導入群 **2020-02-17「SLOTバジリスク～甲賀忍法帖～絆2」**をNo.1334候補として性能コア＋resetBehavior v0.7で調査・登録。
4. 2020-02-17群の追加独立機を監査してCLOSED可否を判定。
5. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11
### No.1333 青鬼
- 1geki 基本: https://1geki.jp/slot/s_aooni/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_aooni/3/
- 1geki 有利区間開始時: https://1geki.jp/slot/s_aooni/43/
- すろぱちくえすと 天井/朝一: https://www.slopachi-quest.com/article/aooni-tennjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/9111
- パチビー: https://www.pachibee.jp/machines/index/219120007
- ぱちんこキュレーション: https://pachinko-curation.com/8750/
- すろかい: https://slotkaiseki.hatenablog.com/entry/aooni
- 2-9伝説: https://29den.com/aooni/

### 群監査 / 次境界
- 1geki 2020年2月新台カレンダー: https://1geki.jp/newmachinecalender/202002/
