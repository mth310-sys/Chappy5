更新日: 2026-09-11

## 現在地点
- recordCount: **1384**
- latestRecordAdded: **パチスロ花の慶次～武威 — No.1384**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_hana-no-keiji-bui.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **パチスロ花の慶次～武威 — No.1384**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_2_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1383「パチスロ頭文字D」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- mainは会話上の旧地点No.1378より先行しておりNo.1383まで完了済みだったため、重複を避けてhandoff指定の次機種から継続。
- **No.1384「パチスロ花の慶次～武威」**を追加。

## No.1384 — パチスロ花の慶次～武威
- path: `docs/real_machine_db/machines/2021-01-12_hana-no-keiji-bui.md`
- manufacturer: **EXCITE（エキサイト / ニューギングループ）**
- formalModel: **S花の慶次～武威～EP**
- certificationNumber: **0S0584**
- releaseDate: **2021-01-12**
- generation/system: **6号機 / AT / 高純増ストレートAT**
- payoutRateBySetting: **98.3 / 99.2 / 100.8 / 107.0 / 110.2 / 112.9%**
- CZ+AT直撃初当たり: **1/511 → 1/237**
- baseGamesPer50: **約51.3G**
- netIncrease: **約8.7枚/G**
- basicPayout: **赤武威1ストック10/20/30G、EX虎武威最低10G+90～99%継続、AT初当たり時は天武の極4G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1384
- 設定変更: **天井RESET / 有利区間RESET / 内部モード再抽選 / 内部状態RESET扱い**。
- 据え置き/純電断: **天井・有利区間・内部モード/状態CARRY_OVER**。
- モード別天井: **通常A/B 991G / 通常C 591G / 通常D 341G / 天国191G**。870G以降当選はAT濃厚。
- 設定変更時モード振り分け（設定1）: **通常A 28.1 / 通常B 19.9 / 通常C 21.0 / 通常D 15.7 / 天国15.3%**。
- 公開朝一数値: **通常C以上52.0% / 通常D以上31.0% / 天国15.3%**。固定リセット短縮天井ではなくモード再抽選による朝一優遇。
- 設定変更時は20Gの**傾奇ゾーン**へ入り、傾奇玉獲得抽選を行う。
- 変更判別: 通常時は有利区間ランプ基本消灯。**朝一から点灯なら据え置き+有利区間引き継ぎ濃厚**。消灯単独では設定変更/据え置きを判別できない。
- 朝一実戦参考: リセット率が高い期間の214万8301G集計で初当たり1/470.1・推定機械割101.05%。一部据え置き混入可能性があるため `PRACTICAL_REFERENCE_ONLY`。
- 本機固有ガックン発生条件/発生率、設定変更時の内部状態確率付き初期表は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH` / `NO_PUBLIC_FIXED_STATE_TABLE_FOUND_AFTER_RESEARCH`。

## 2021-01-12群監査 — OPEN
1geki確定カレンダー上のパチスロ7機:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — NEXT / No.1385候補**
4. **戦国乙女3～天剣を継ぐもの～ — PENDING**
5. **S Lucky海物語 — PENDING**
6. **ニューハナハナゴールド-30 — PENDING**
7. **南国育ち-30 — PENDING**

- K-Navi 2021-01-12カレンダーは頭文字Dを除く6機を掲載し、その他6機は1gekiと一致。
- 同日群の順序自体に意味はないため、漏れ防止用に上記固定キューで処理する。
- 7機完了後、1/12同日全メーカー・別型式・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **麻雀格闘倶楽部 真 — No.1385候補**。
- 以後: **戦国乙女3～天剣を継ぐもの～ → S Lucky海物語 → ニューハナハナゴールド-30 → 南国育ち-30**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1384を優先し、遡及レコードの更新は行っていない。
- 次回遡及QAカーソルは引き続き **`docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）**。

## GitHub保存
- No.1384追加 commit: `fda796b9e6b1e3209691ab7621d857750f8a1cd0`

## 主要出典 — 取得日 2026-09-11
### No.1384 花の慶次～武威
- https://hazuse.com/machine/pachislot/0S0584/
- https://web-greenbelt.jp/post-41020/
- https://p.hisshobon.jp/machine/3577/1/79914
- https://hisshobon.news/uncategorized/3123/
- https://1geki.jp/slot/s_keiji_bui/
- https://1geki.jp/slot/s_keiji_bui/42/
- https://nana-press.com/kaiseki/machine/95/2874/
- https://nana-press.com/kaiseki/machine/95/2876/
- https://chonborista.com/slot/newgin-slot/121124/
- https://ichikatsu.com/keijiv/
- https://slotjin.com/zone/keijibui-data/
- https://suropatizamuraibuttagiri.com/2021/01/18/hananokeiji-yuurikukannhikitugi/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/14/at01.php

### 2021-01 group
- https://1geki.jp/newmachinecalender/202101/
- https://p-kn.com/calendar/202101/
