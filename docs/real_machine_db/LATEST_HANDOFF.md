更新日: 2026-09-11

## 現在地点
- recordCount: **1383**
- latestRecordAdded: **パチスロ頭文字D — No.1383**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_initial-d.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **パチスロ頭文字D — No.1383**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_1_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1382「パチスロひぐらしのなく頃に祭2」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 2020-12-22～2021-01-11境界を1geki/K-Naviで監査。1geki確定カレンダーでは2021-01-04のスロット新台は0機、次のスロット群は2021-01-12。
- 2021-01-12群は1geki確定カレンダーで7機を確認。K-Navi旧カレンダーは6機で頭文字Dを欠く一方、K-Navi頭文字D機種DBには2020-12-21導入表記が残る。HAZUSE・複数解析・1gekiは2021-01-12で一致するため、**頭文字Dは2021-01-12をcanonical、2020-12-21をCONFLICT/旧予定差として一度だけ登録**。
- **No.1383「パチスロ頭文字D」**を追加。

## No.1383 — パチスロ頭文字D
- path: `docs/real_machine_db/machines/2021-01-12_initial-d.md`
- manufacturer: **サミー（製造元タイヨーエレック）**
- formalModel: **Sパチスロ頭文字D XR**
- certificationNumber: **0S0903**
- releaseDate: **2021-01-12 canonical / K-Navi旧DB 2020-12-21 CONFLICT**
- generation/system: **6号機 / A+AT / type-D**
- payoutRateBySetting: **97.9 / 98.5 / 101.0 / 105.5 / 109.1 / 111.0%**
- fullStrategyPayout: **98.9 / 99.5 / 101.8 / 106.0 / 109.6 / 111.5%**
- AT初当り: **1/399.6 → 1/175.6**
- ボーナス合算: **1/261.0 → 1/226.8**
- baseGamesPer50: **約36.3G**
- netIncrease: **約2.5枚/G**
- basicPayout: **LEGEND BONUS 154枚 / BIG約120枚 / AT 1セット約40G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1383
- 設定変更: **天井G・有利区間RESET、高確濃厚 + 当該有利区間のAT当選時ATレベル優遇**。
- 据え置き/純電断: **天井G・内部状態・有利区間CARRY_OVER**。
- 天井: **有利区間移行後555G+αでレジェンドバトル**。CZ/CZ前兆中は延長場合あり。
- リセット専用短縮天井: **なし**。
- 変更判別: 通常時から有利区間ランプ点灯型のため、未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日非有利区間終了・店側対策等の例外あり。
- 非有利区間中ボーナス: **AT濃厚**。設定変更専用確率ではないため補助朝一恩恵として保持。
- 本機固有ガックン発生条件/発生率、設定変更専用のATレベル数値振り分けは検索語・資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH` / `NO_PUBLIC_FIXED_TABLE_FOUND_AFTER_RESEARCH`。

## 2021-01-12群監査 — OPEN
1geki確定カレンダー上のパチスロ7機:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — NEXT / No.1384候補**
3. **麻雀格闘倶楽部 真 — PENDING**
4. **戦国乙女3～天剣を継ぐもの～ — PENDING**
5. **S Lucky海物語 — PENDING**
6. **ニューハナハナゴールド-30 — PENDING**
7. **南国育ち-30 — PENDING**

- K-Navi 2021-01-12カレンダーは上記のうち頭文字Dを除く6機を掲載し、その他6機は一致。
- 同日群の順序自体に意味はないため、漏れ防止用に上記固定キューで処理する。
- 7機完了後、1/12同日全メーカー・別型式・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **パチスロ花の慶次～武威 — No.1384候補**。
- 以後: **麻雀格闘倶楽部 真 → 戦国乙女3～天剣を継ぐもの～ → S Lucky海物語 → ニューハナハナゴールド-30 → 南国育ち-30**。
- 頭文字Dは旧K-Navi 2020-12-21表記へ戻って重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は2021年境界と本線No.1383を優先し、遡及レコードの更新は行っていない。
- 次回遡及QAカーソルは引き続き **`docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）**。

## GitHub保存
- No.1383追加 commit: `a6b82c1f3c6169cf4f18aec2b68b88f9d8033a96`

## 主要出典 — 取得日 2026-09-11
### No.1383 頭文字D
- https://1geki.jp/newmachinecalender/202101/
- https://hazuse.com/en/machine/pachislot/0S0903/
- https://hazuse.com/machine/pachislot/0S0903/genre/201/
- https://hazuse.com/machine/pachislot/0S0903/genre/207/
- https://nana-press.com/kaiseki/machine/93/2246/
- https://nana-press.com/kaiseki/machine/93/2525/
- https://nana-press.com/kaiseki/machine/93/2523/
- https://1geki.jp/slot/s_intiald/3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/183/tj06.php
- https://slotjin.com/tenjoukitaichi/intiald/
- https://yanmaga.jp/columns/articles/199
- https://yugi-nippon.com/pachinko-new-machine/post-43716/
- https://kaiseki.sulopachinews.com/archives/2352
- https://p-kn.com/slot/3500/

### 2021-01 boundary / group
- https://1geki.jp/newmachinecalender/202101/
- https://p-kn.com/calendar/202101/
