更新日: 2026-09-12

## 現在地点
- recordCount: **1389**
- latestRecordAdded: **南国育ち-30 — No.1389**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_nangoku-sodachi-30.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **南国育ち-30 — No.1389**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1388「ニューハナハナゴールド-30」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1389「南国育ち-30」**を追加。
- 2021-01-12群7機を全件処理後、1geki・K-Navi・当時新台一覧を横断し同日群を再監査。既知7機以外のパチスロ新台は確認できず群CLOSED。
- 2021-01-25はK-Naviカレンダー上パチンコのみでパチスロ新台なし。1geki月間カレンダーでは2021-02-01もスロット0機、次のパチスロ導入群は2021-02-08の5機。
- 遡及resetBehavior QAは今回本線を優先し、カーソルを進めていない。

## No.1389 — 南国育ち-30
- path: `docs/real_machine_db/machines/2021-01-12_nangoku-sodachi-30.md`
- manufacturer: **アムテックス / 平和**
- formalModel: **S南国育ちA5-30**
- certificationNumber: **0S0191**
- releaseDate: **2021-01-12**
- generation/system: **6.1号機 / AT / 擬似ボーナス連チャン / 完全告知 / 30Φ沖スロ**
- payoutRateBySetting: **97.4 / 99.2 / 101.5 / 105.3 / 108.8 / 113.8%**
- bonusInitialHit: **1/354.7 / 339.5 / 328.7 / 316.8 / 308.0 / 298.6**
- baseGamesPer50: **約36.1G**
- netIncrease: **約6.2枚/G**
- basicPayout: **BIG 40G 約240枚（業界発表約248枚） / REG 20G 約120枚（同約124枚）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MORNING_MODE_TABLE**

### resetBehavior v0.7 — No.1389
- 設定変更: **有利区間RESET / 天井RESET / 内部モードRESET**。
- 据え置き / 純電源OFF→ON: **有利区間・天井・内部モードCARRY_OVER**。
- 通常最深天井 **996G** に対し、設定変更後は **796G** へ200G短縮。通常C/準備C以上滞在時は **401G**。
- 設定変更後の初期モードは全設定共通で **通常A54.06 / B9.09 / C9.86 / D9.86 / E17.13%**。通常C以上合計 **36.85%**。
- 設定変更後以外の有利区間移行時は A69.92 / B4.69 / C12.50 / D12.50 / E0.39% で、通常C以上合計25.39%。設定変更時は特に通常Eが優遇。
- 有利区間ランプはクレジット右下ドット。**朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。店側対策や前日状態の例外があるため確定条件にはしない。
- 非有利区間では確定役合成 **約1/1260**。これは設定変更専用ではなく有利区間リセット時共通の恩恵として分離保存。
- 本機固有ガックン条件/発生率、通常A～E以外の独立した朝一内部高確状態表は資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-01-12群監査 — CLOSED
固定キュー:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — No.1385 / DONE**
4. **戦国乙女3～天剣を継ぐもの～ — No.1386 / DONE**
5. **S Lucky海物語 — No.1387 / DONE**
6. **ニューハナハナゴールド-30 — No.1388 / DONE**
7. **南国育ち-30 — No.1389 / DONE**

- 1geki 2021年1月カレンダーは1月のパチスロ新台を計7機としており、この7機と一致。
- K-Navi 2021年1月カレンダーでも1/12群として花の慶次～武威、麻雀格闘倶楽部 真、戦国乙女3、S Lucky海物語、ニューハナハナゴールド-30、南国育ち30を確認。頭文字Dは別系統当時新台一覧・既存mainレコードで1/12導入済みとして処理済み。
- 当時新台導入予定一覧でも同日7機構成を確認。
- status: **2021-01-12_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 次回本線の再開地点
- 最新main再同期後、**2021-02-08群**へ進む。
- 2021-01-25、2021-02-01はパチスロ新台0機として境界監査済み。
- 1geki 2021年2月カレンダーの2021-02-08スロット5機を固定キュー候補とする:
  1. **パチスロ バイオハザード7 レジデント イービル — NEXT / No.1390候補**
  2. **パチスロ フレームアームズ・ガール**
  3. **パチスロ ゴッドイーター ジ・アニメーション**
  4. **政宗３**
  5. **KING黄門ちゃま**
- 次回はmain再同期・別カレンダー照合後、No.1390候補から処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- 次回遡及QAカーソルは **`docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）**。

## GitHub保存
- No.1389追加 commit: `17d0218c69a3cec7379f8414398ea8705734884a`

## 主要出典 — 取得日 2026-09-12
### No.1389 南国育ち-30
- https://hazuse.com/machine/pachislot/0S0191/genre/201/
- https://hazuse.com/machine/pachislot/0S0191/genre/207/
- https://hazuse.com/machine/pachislot/0S0191/genre/209/
- https://1geki.jp/slot/nangoku30/3/
- https://1geki.jp/slot/nangoku30/43/
- https://1geki.jp/slot/nangoku30/41/
- https://nana-press.com/kaiseki/machine/94/2660/
- https://nana-press.com/kaiseki/machine/94/2661/
- https://nana-press.com/kaiseki/machine/94/2662/
- https://ichikatsu.com/nangoku30/
- https://p-kn.com/slot/3494/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/bn01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/amutex_slot/04/tj05.php
- https://web-greenbelt.jp/post-41549/
- https://www.pidea.jp/articles/1601974622

### 群監査 / 次回境界
- https://1geki.jp/newmachinecalender/202101/
- https://p-kn.com/calendar/202101/
- https://crankyseven.com/newmachine-info.htm
- https://1geki.jp/newmachinecalender/202102/
