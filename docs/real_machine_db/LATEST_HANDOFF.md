更新日: 2026-09-10

## 現在地点
- recordCount: **1197**
- latestRecordAdded: **パチスロ黄門ちゃまV**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-04_koumon-chama-v.md`
- chronologicalFrontier: **2018-06-04**
- frontierLatestMachine: **パチスロ黄門ちゃまV — No.1197**
- schema: **resetBehavior v0.7**
- status: **2018-06-04_GROUP_OPEN_2_OF_AT_LEAST_5_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1196を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時点で並行リレーが1196件まで前進していたため、旧1193地点へ戻らず **1196件 / 2018-06-04群OPEN** を正本として継続。
- 2018-06-04群の次候補 `パチスロ黄門ちゃまV` をNo.1197としてperformance core + resetBehavior v0.7収集。
- 公式オリンピア、HAZUSE、一撃、PiDEA X、当時解析を横断。導入日は2018-06-04で一致。
- 機械割は設定1/2のみ **98.1/99.1%** と **97.6/98.2%** の資料差があるため平均せずCONFLICT保持。設定3～6は100.4/104.9/106.0/109.1%で一致。
- resetBehaviorは機種固有資料から、設定変更後=有利区間ランプ消灯・内部状態通常、純電源OFF→ON=有利区間ランプ/内部状態引継ぎを固定。
- 通常ゲーム数天井は非搭載。設定変更専用短縮天井/朝一専用モード/初当たり優遇の公開数値は確認なし。
- 前日有利区間ランプ点灯→翌朝も点灯なら据え置き濃厚という判別要素を保存。本機固有ガックン定量値は十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。

## No.1197 — パチスロ黄門ちゃまV
- path: `docs/real_machine_db/machines/2018-06-04_koumon-chama-v.md`
- manufacturer: **オリンピア**
- releaseDateCanonical: **2018-06-04**
- formalModelName: `パチスロ黄門ちゃまV／K2`
- certificationNumber: `7S1718`
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout canonical: **98.1 / 99.1 / 100.4 / 104.9 / 106.0 / 109.1%**
- payout conflict: **97.6 / 98.2 / 100.4 / 104.9 / 106.0 / 109.0～109.1%系**
- BIG合算: **全設定1/318.1**
- REG: **1/360.1 / 1/360.1 / 1/318.1 / 1/250.1 / 1/266.4 / 1/227.6**
- bonus combined: **1/168.9 / 1/168.9 / 1/159.1 / 1/140.0 / 1/145.0 / 1/132.7**
- ART初当たり: **1/567.3 / 1/565.0 / 1/545.9 / 1/518.7 / 1/529.2 / 1/499.2**
- base: **約28.8～30.2G/50枚**
- ART純増: **約0.8枚/G**（ボーナス込み約1.5枚/G資料あり、定義分離）
- payout: 同色BIG約284枚 / 異色BIG平均約185枚・最大232枚 / REG最大59枚
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **有利区間ランプ消灯 / 内部状態=通常 / 非有利区間開始**。
- carryOver: 前日ランプ点灯→翌朝点灯で据え置き濃厚。ただし純電断と独立した全状態契約は `UNVERIFIED_AFTER_RESEARCH_AS_SEPARATE_CONDITION`。
- powerOFF→ON: **有利区間ランプ・内部状態を引き継ぐ**。
- gameCounter/ceiling: `NOT_APPLICABLE_NO_CEILING`。
- resetBenefit: 短縮天井/朝一専用モード/初当たり優遇数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 有利区間ランプが主要判別要素。本機固有ガックン発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2018-06-04群監査
### 処理済み
- No.1196 パチスロディスクアップ
- No.1197 パチスロ黄門ちゃまV

### 未処理候補
- **パチスロ 天元突破グレンラガン極** — スパイキー
- **パチスロ 貞子vs伽椰子** — 藤商事
- **ちゃぶ台返し** — ベルコ

### 群判定
- `2018-06-04_GROUP_OPEN_2_OF_AT_LEAST_5_PROCESSED`
- 次回は同日候補の正式導入日・型式・別スペック・メーカー横断監査を続け、最古未処理をNo.1198から処理する。
- 次候補は **パチスロ 天元突破グレンラガン極 — No.1198候補**。最新mainで並行更新が無いことを再確認してから確定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_hanasakari.md**（花盛）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_dengeki-franken.md`（電撃フランケン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は並行更新追従と前進レコードを優先し、QAカーソル自体は変更していない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- ディスクアップの導入日は2018-06-04 canonical、2018-05-21資料はCONFLICT保持済み。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率等の競合は平均化せず`CONFLICT`として保持する。
- 6/4群は `天元突破グレンラガン極` / `貞子vs伽椰子` / `ちゃぶ台返し` を処理するまで閉じない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1197を再取得。
2. **1197件 / chronologicalFrontier 2018-06-04 / 6/4群OPEN**を正本として継続。
3. **パチスロ 天元突破グレンラガン極をNo.1198先頭候補**としてperformance core + resetBehavior v0.7を収集。
4. 続いて `パチスロ 貞子vs伽椰子` / `ちゃぶ台返し` を漏れなく処理。
5. 同日群の全メーカー/別スペック監査後にのみ6/4群をCLOSEする。
6. 遡及QAは `2006-07_dengeki-franken.md`（電撃フランケン）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1197 パチスロ黄門ちゃまV
- オリンピア公式: https://www.olympia.co.jp/newmachine/ps_chamav/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1718/
- 一撃 機種ページ: https://1geki.jp/slot/s_koumonv/
- 一撃 ボーナス/ART確率: https://1geki.jp/slot/s_koumonv/1/
- 一撃 50枚ベース: https://1geki.jp/slot/s_koumonv/4/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_koumonv/61/
- PiDEA X: https://www.pidea.jp/articles/%E9%81%B8%E6%8A%9E%E5%BC%8F%E4%B8%8A%E4%B9%97%E3%81%9B%E3%82%BE%E3%83%BC%E3%83%B3%E3%82%92%E7%B6%99%E6%89%BF%EF%BC%81%E9%BB%84%E9%96%80%E3%81%A1%E3%82%83%E3%81%BEV%EF%BC%8F%E3%82%AA%E3%83%AA%E3%83%B3%E3%83%94%E3%82%A2
- 期待値見える化 朝一解析: https://slotjin.com/slot/koumonv/
- すろかい: https://slotkaiseki.hatenablog.com/entry/2018/03/30/090612
- PAY競合資料: https://ameblo.jp/kenchan-retro/entry-12869487725.html

## 今回コミット
- No.1197追加: `55407eb104c55ca99a78f4ecfdac69e8753b43d7`
