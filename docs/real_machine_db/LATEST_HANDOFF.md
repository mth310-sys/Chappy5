更新日: 2026-09-11

## 現在地点
- recordCount: **1370**
- latestRecordAdded: **吉宗3 — No.1370**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-10-05_yoshimune3.md`
- chronologicalFrontier: **2020-10-05**
- frontierLatestMachine: **吉宗3 — No.1370**
- schema: **resetBehavior v0.7**
- status: **2020-10-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1368「パチスロ 対魔導学園35試験小隊」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 正本上の2020-10-05群を処理し、**No.1369 S笑ゥせぇるすまん 絶笑**、**No.1370 吉宗3** を追加。
- 2020年新台導入カレンダーでは10/5のパチスロは `S笑ゥせぇるすまん 絶笑 SJ` / `S吉宗3 EA5` の2機。業界記事・当時解析・機種DBでも両機の10/5導入を照合し、同日へ追加すべき別パチスロを固定できなかったため **2020-10-05群CLOSED**。
- 次の明確なパチスロ導入群は **2020-10-19**。カレンダー上は `Sカイジ沼 KR`（回胴黙示録カイジ～沼～）を確認。

## No.1369 — S笑ゥせぇるすまん 絶笑
- path: `docs/real_machine_db/machines/2020-10-05_warau-salesman-zesshou.md`
- manufacturer: **サンスリー / SANYO GROUP**
- formalModel: **S笑ゥせぇるすまん絶笑SJ**
- releaseDate: **2020-10-05**
- generation/system: **6号機 / 差枚数管理型AT / CZ+ゲーム数解除 / 有利区間管理**
- 出玉率: **97.7 / 98.9 / 101.5 / 104.8 / 108.0 / 110.8%**
- AT初当たり: **1/346.0 / 1/330.7 / 1/301.6 / 1/262.5 / 1/231.3 / 1/221.0**
- base: **約50.5G/50枚**
- netIncrease: **約2.8枚/G**
- 通常/真/極ATの期待獲得枚数: **約290 / 610 / 1040枚**（必勝本公開値）
- 天井: 通常A 699G / 通常B 499G / 引き戻し 449G / 天国 99G。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1369
- 設定変更: **天井G RESET / 有利区間RESET / 通常時モード再抽選 / 笑ゥポイント初期再抽選**。
- 据え置き/純電源OFF→ON: **天井G・有利区間CARRY_OVER**。液晶G数は0へ戻る。
- 設定変更専用固定短縮天井は確認なし。ただし有利区間移行時の天国移行率は **20.3%（全設定共通）**で、天国なら最大99G。
- 293G到達時はCZ抽選状態が必ず高確へ移行し、前日G数との組み合わせでリセット/据え置き推測に利用可能。
- 通常時は有利区間ランプ基本消灯のため、朝一消灯だけでは設定変更判別不可。点灯なら据え置き濃厚材料。
- 本機固有ガックン、設定変更時CZ状態詳細振り分けは再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1370 — 吉宗3
- path: `docs/real_machine_db/machines/2020-10-05_yoshimune3.md`
- manufacturer: **サボハニ / 大都技研**
- formalModel: **S吉宗3EA5**
- releaseDate: **2020-10-05**
- generation/system: **6号機 / 疑似ボーナス型AT / 差枚数管理BIG+REG / 有利区間管理**
- 出玉率: **97.8 / 99.0 / 100.3 / 104.0 / 108.3 / 112.1%**
- ボーナス初当たり: **1/527.3 / 1/518.6 / 1/459.9 / 1/381.1 / 1/330.9 / 1/294.4**
- base: **約50.6G/50枚**
- netIncrease: **約4.0枚/G**
- BIG期待獲得枚数: **約711枚**。REGはベルナビ7回。
- 天井: 通常時767G+前兆。モード別前兆込み目安は通常A約799G / B約663G / C約363G / 天国約193G。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1370
- 設定変更: **有利区間RESET→非有利区間 / 天井G RESET / モード再抽選 / 千両pt 0pt / 内部状態RESET**。
- 据え置き/純電源OFF→ON: **天井G・有利区間・内部状態・千両pt CARRY_OVER**。千両ptは見た目0ptの場合あり。
- 設定変更専用固定短縮天井は確認なし。
- 設定変更後は朝一数ゲームで内部的に千両回胴へ移行し、見た目で千両回胴へ入る割合は後発解析で約50%。突入ならリセットの可能性大、非突入でも否定不可。
- 通常時有利区間ランプは基本消灯のため朝一ランプでの変更判別は困難。
- 朝一1～66Gの越後屋＆悪代官ランプ点灯は **設定変更+設定2以上濃厚**。設定2以上へ変更時の約25%で点灯。44G=設定4以上、55G=設定5以上、66G=設定6。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 2020-10-05群監査 — CLOSED
- **S笑ゥせぇるすまん 絶笑SJ**: No.1369処理済み。
- **S吉宗3 EA5**: No.1370処理済み。
- 2020新台導入カレンダー、P-WORLD/グリーンべると、娯楽産業、DMM、1geki、パチ7等を横断し、10/5同日へ追加すべき別パチスロを固定できず **CLOSED**。
- 次群は **2020-10-19**。先頭候補は **回胴黙示録カイジ～沼～ / Sカイジ沼 KR — No.1371候補**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。reset側 `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線2機と同日群監査を優先し、遡及QA地点は進めていない。

## 次回本線の再開地点
- 最新main再同期後、**2020-10-06～10-18境界監査 → 2020-10-19群**を開始。
- 先頭候補: **回胴黙示録カイジ～沼～ / Sカイジ沼 KR — No.1371候補**。
- 10/19群処理後、全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。

## GitHub保存
- No.1369追加 commit: `4664877fc07d8c37e2d41f81c9f6a78cea18f317`
- No.1370追加 commit: `5913cd39c228b90b157fe1058297564b9a1f4046`
- 直前No.1368追加 commit: `cca43ba07bf03eeef73b5dcc6e6bd97dd5e0b1ac`
- 直前遡及QAダンス☆マン commit: `a781a3797ae0d7fade9a8a3aad97b8cd00044b2e`

## 主要出典 — 取得日 2026-09-11
### No.1369 S笑ゥせぇるすまん 絶笑
- SANYO公式: https://www.sanyobussan.co.jp/products/slot.html
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/14342/yugitsushin
- なな徹: https://nana-press.com/kaiseki/machine/81/
- 1geki設定変更: https://1geki.jp/slot/s_warau_z/3/
- 必勝本: https://p.hisshobon.jp/machine/3564/1/79348
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9230

### No.1370 吉宗3
- DMMぱちタウン: https://p-town.dmm.com/machines/3750
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/14751/greenbelt
- 娯楽産業: https://www.goraku-sangyo.com/%E3%82%B5%E3%83%9C%E3%83%8B%EF%BC%8F%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%90%89%E5%AE%973%E3%80%8D%E7%99%BA%E8%A1%A8/
- パチ7: https://pachiseven.jp/machines/6129/cutout/2
- 必勝本設定変更: https://p.hisshobon.jp/vpage/2396/5
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/117551/

### 2020-10-05群監査
- 2020新台導入カレンダー: https://pachinkopachisro.com/archives/53951811.html
