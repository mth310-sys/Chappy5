# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-22
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- previous restart point: LT-status verification for `P海物語 極JAPAN` / `P乗物娘 with CYBER JAPAN DANCERS 2nd season`

## This relay
### P海物語 極JAPAN — EXCLUDED (LT非搭載)
- 三洋物産 / 型式 `P海物語極ジャパンHTH` / 2025-05-07。
- 通常約1/319.6、右約1/73.9、初当り後ST突入100%。50%がST100回+残保留4「極ノ刻」、50%がST20回+残保留4「極チャンス」。極ノ刻TOTAL突入約64%、継続約76%。
- 3000個+上乗せチャンス「火鈴連発ボーナス」を搭載するが、メーカー/業界発表・複数解析でLTとして扱われていない。LT正式名称/発動条件も存在確認できず、本DBには登録しない。
Sources:
- https://yugi-nippon.com/pachinko-new-machine/post-69324/
- https://p.hisshobon.jp/news/2102
- https://p-kn.com/pachinko/4297/

### P乗物娘 with CYBER JAPAN DANCERS 2nd season — EXCLUDED (LT非搭載)
- ニューギン / 型式 `P乗物娘2 LM3` / 2025-05-07。
- 通常1/199.8、右1/69.49前後、ST100回、RUSH突入100%、継続約77%。
- パチマガスロマガ詳細スペックが明示的に `ラッキートリガー: なし`。ニューギン直営先行導入記事も「LTに疲れたという人にピッタリ」とLT機との差別化を明示。LT非搭載として除外。
Sources:
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/499/kh02.php
- https://p-johojima.jp/new_machine/post-4679/
- https://1geki.jp/pachinko/p_norimonom2/39/

## 2025-05-07 boundary audit — CLOSED
独立カレンダー2系統を照合。
- 情報島の2025-05-07一覧: P海物語 極JAPAN / P織田信奈 下剋上 / PFユニコーン再来129 / デジハネ北斗慈母 / 江頭2:50 / P乗物娘2 / PLTせかつよ2 / e仮面ライダーBLACK / P ToLOVEる100 / P攻殻SAC_2045大入り / Pヤマト2202森雪199LT。
- ALL7 2025年5月導入予定でも同日主要機を照合。
- 上記LT-positiveは既存COMPLETE_CORE済み。P海極JAPAN、P乗物娘2、P ToLOVEる100はLT非搭載確認済み。
Sources:
- https://p-johojima.jp/machine_spec/post-2074/
- https://www.all7.jp/plans/index/2025/05

## 2025-05-19 boundary — CLOSED / LT登録なし
情報島カレンダーではパチンコ新台は `～回るヘソワイド～Pファンキードクター 11000ver.` と `7200ループver.` の2機種。
- 11000ver.: 型式 `PファンキードクターD`、約1/79.8、初当り6%でファンキーBONUS、初当り込み計10回・約11000個。
- 7200ループver.: 型式 `PファンキードクターDL`、約1/69.4、初当り6%でファンキーBONUS、初当り込み計6回・約7200個、終了後残保留1個のおかわりチャンス約1/5.5。
- K-Naviにはシリーズページのカテゴリタグとして「ラッキートリガー」表記がある一方、メーカー発表を伝える業界一次系資料、P-WORLD、HAZUSE、スペック解析ではLT正式名称・LT発動条件として扱われず、リミット/一発台構造として説明。HAZUSE機種詳細の「ラッキートリガー」欄も空欄。単一カテゴリタグだけを根拠にLT搭載確定しない。両機とも本DBには登録せず、5/19境界をCLOSED。
Sources:
- https://p-johojima.jp/machine_spec/post-2074/
- https://yugi-nippon.com/pachinko-new-machine/post-69952/
- https://news.p-world.co.jp/articles/30332/greenbelt
- https://hazuse.com/machine/pachinko/4P1523/
- https://hazuse.com/machine/pachinko/4P1927/
- https://www.p-world.co.jp/machine/database/10245
- https://p-kn.com/pachinko/4312/fever/4435/

## Boundary state
### 2025-04-07 — CLOSED
### 2025-04-21 — CLOSED
### 2025-05-07 — CLOSED
### 2025-05-19 — CLOSED (LT-positive recordなし)
### 2025-06-02 — NEXT / OPEN
Independent calendar identifies 11 pachinko introductions. LT-positive candidates must be verified one-by-one before record creation:
- `Pfマクロスフロンティア5 LT-LIGHT ver.` — name itself LT candidate; **NEXT RESTART POINT**
- `P緋弾のアリア～緋緋神降臨～88Ver.` — LT status verify
- `PLT激デジ ジューシーハニー極嬢` — LT candidate
- `e 新・必殺仕置人 超斬撃99` — LT status verify
- remaining same-day machines (`P DD北斗の拳3 百突99ver.`, `eF彼女、お借りします`, `e範馬刃牙`, `PA海物語3R3`, `デカスタ P戦国無双`, `デジハネPモンスターハンターライズ`, `e冴えない彼女の育てかた`) also verify LT status; do not infer from RUSH/上位RUSH alone.
Calendar source:
- https://p-johojima.jp/machine_spec/post-2074/

## Effective DB state
Previous effective state: 95 records / 94 COMPLETE_CORE / 1 CONFLICT.
This relay added no machine record; two 5/7 candidates and both 5/19 machines were excluded after LT-status verification.
- machine records: **95**
- COMPLETE_CORE: **94**
- CONFLICT: **1**
- INDEX is stale; machine files + this handoff are progress source of truth until INDEX integration.

## Next restart point
**Start 2025-06-02 with `Pfマクロスフロンティア5 LT-LIGHT ver.`. Verify duplicate absence, official/formal model name, LT-positive evidence, then collect full core/LT structure. Continue all 2025-06-02 machines and re-enumerate the boundary from a second independent calendar before closure. Only LT-positive machines receive records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search machine files, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and never infer unpublished total LT arrival rates from route probabilities.