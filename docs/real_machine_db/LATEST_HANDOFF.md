更新日: 2026-09-10

## 現在地点
- recordCount: **1190**
- latestRecordAdded: **パチスロ FAIRY TAIL**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-07_pachislot-fairy-tail.md`
- chronologicalFrontier: **2018-05-07**
- frontierLatestMachine: **パチスロ FAIRY TAIL — No.1190**
- schema: **resetBehavior v0.7**
- status: **2018-05-07_GROUP_CORE_3_REGISTERED_DATE_CONFLICT_AUDIT_REMAINS**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1188 `パチスロ 大海物語4` を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1188件 / chronologicalFrontier 2018-05-07 / 5/7群OPEN**。
- GitHub検索で `パチスロ北斗の拳 修羅の国篇 羅刹ver.` と `パチスロ FAIRY TAIL` の既存レコードがないことを確認。
- No.1189 `パチスロ北斗の拳 修羅の国篇 羅刹ver.` を新規登録。
- No.1190 `パチスロ FAIRY TAIL` を新規登録。
- 5/7横断監査で `楽シーサー30π` に **2018-05-07 vs 2018-05-21** の導入日競合を発見。5/7群を完全CLOSEDにせず、次回まず日付を裁定する。
- 複数導入カレンダーでは5/7群を北斗羅刹 / FAIRY TAIL / 大海物語4の3機とする資料がある一方、すろぱちくえすと等は楽シーサー30πも5/7に置く。ちょんぼりすたは5/21。平均化せずDATE_CONFLICTとして保留。
- `秘宝伝 Rev.` は資料に5/7と5/21の揺れが見えるため、楽シーサー30πと同様に次境界で日付監査対象。

## No.1189 — パチスロ北斗の拳 修羅の国篇 羅刹ver.
- path: `docs/real_machine_db/machines/2018-05-07_hokuto-no-ken-shura-rasetsu-ver.md`
- manufacturer: **サミー / Sammy**
- releaseDateCanonical: **2018-05-07**
- formalModelName: `パチスロ北斗の拳AA／ZS`
- certificationNumber: `7S0983`
- generation/system: **5.9号機 / A+RT / GRT**
- 機械割: **97.2 / 98.1 / 100.5 / 103.4 / 108.2 / 111.8%**
- 完全攻略PAY: **99.7 / 100.6 / 103.0 / 106.0 / 111.0 / 115.1%**
- ボーナス合算: **1/229.9 → 1/164.7前後**
- 50枚ベース: **約34.3G**
- HBB **300枚** / BIG **最大239枚** / REG **最大64枚**、全ボーナス後RT100G。
- 天井: **非搭載**。

### resetBehavior v0.7
- 一撃の本機専用比較表は、設定変更時/純電源OFF→ON時ともRT状態・液晶ステージを当時「現在調査中」。
- 検索語・資料系統を変えて再探索したが、本機固有の確定契約へ昇格できる資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため短縮天井は `NOT_APPLICABLE`。
- 設定変更専用の朝一モード振り分け、当選率上昇、RT優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン確率/変更確定契約は `UNVERIFIED_AFTER_RESEARCH`。

## No.1190 — パチスロ FAIRY TAIL
- path: `docs/real_machine_db/machines/2018-05-07_pachislot-fairy-tail.md`
- manufacturer: **藤商事**
- releaseDateCanonical: **2018-05-07**
- formalModelName: `FAIRY TAIL FSA`
- certificationNumber: `7S1186`
- generation/system: **5.9号機 / A+ART**
- 機械割: **97.1 / 98.9 / 100.4 / 104.3 / 107.6 / 115.3%**
- ART初当たり: **1/528.6 / 526.2 / 524.1 / 519.9 / 514.6 / 508.6**
- ボーナス合算: **1/368.2 → 1/209.4**
- 50枚ベース: **約33G**
- ART純増: **約1.2枚/G、ボーナス込み約2.0枚/G**
- SFB: **351枚** / FB: **207枚**
- 天井: **非搭載**。

### resetBehavior v0.7
- 設定変更時: **内部状態RESET / 有利区間ランプRESET / 液晶ステージ再抽選 / ミニキャラレベルRESET**。
- 電源OFF→ON時: **内部状態CARRYOVER / 有利区間ランプCARRYOVER / 液晶ステージ再抽選 / ミニキャラレベルRESET**。
- 据え置き資料も内部状態・有利区間ランプ引継ぎ、液晶再抽選、ミニキャラレベルRESETで一致。
- 朝一液晶ステージ公開値（設定変更/電源OFF→ON共通）:
  - 設定1/3/5: マグノリア33.3 / ルーシィの部屋33.3 / ビーチ33.3%
  - 設定2/4/6: マグノリア25.0 / ルーシィの部屋25.0 / ビーチ50.0%
- すろぱちくえすとは「ガックンしない」「リセット/据え置き判別不可」と記載。
- 有利区間ランプは前日状態が分かる場合に据え置き推測材料になり得る。

## 2018-05-07群監査
### 確定登録済み
- No.1188 `パチスロ 大海物語4` — 三洋物産。
- No.1189 `パチスロ北斗の拳 修羅の国篇 羅刹ver.` — サミー。
- No.1190 `パチスロ FAIRY TAIL` — 藤商事。

### 日付競合 / 境界保留
- `楽シーサー30π` — SANKYO。
  - すろぱちくえすと: 2018-05-07。
  - 2018導入一覧の一部: 2018-05-07。
  - ちょんぼりすた: 2018-05-21。
  - 別の導入カレンダーは5/7群に掲載せず。
  - 次回、公式/業界一次・HAZUSE/P-WORLD/当時ホール導入資料を追加照合しcanonical dayを裁定。競合は保持。
- `秘宝伝 Rev.` — 一部2018一覧で5/7、別導入カレンダーで5/21。次回境界監査対象。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで推測表現「?」「可能性が高い」「調査中」を確定契約へ昇格しない。
- 5.9号機一般論から本機固有の有利区間リセット契約を推定転記しない。
- 別スペックの値を転記しない。
- 導入カレンダー間の日付競合は平均化せず `CONFLICT` として保持し、実導入/納品開始/予定日の定義差を確認する。
- `INDEX.md` は旧スナップショット。次回も `LATEST_HANDOFF.md` + main実レコードを優先する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_ooedo-manyuuki.md**（大江戸漫遊記）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_shinzo-ningen-casshern.md`（新造人間キャシャーン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は新規本線No.1189〜1190を優先し、retro cursorは変更なし。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1190を再取得。
2. **1190件 / chronologicalFrontier 2018-05-07** を正本として継続。
3. `楽シーサー30π` の2018-05-07 vs 2018-05-21を公式・業界・当時DBで再裁定。未登録確認後、canonical dayを確定してNo.1191候補としてperformance core + resetBehavior v0.7を収集。
4. `秘宝伝 Rev.` の5/7 vs 5/21境界も同時監査し、未登録なら時系列を崩さない位置で次候補化。
5. 5/7群の追加漏れがないことを最終確認し、日付競合の帰属を確定した段階でCLOSED判定。
6. 次の日付群（主に2018-05-21候補群）へ前進。
7. 遡及QAは `2006-07_shinzo-ningen-casshern.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1189 北斗羅刹
- Sammy公式: https://www.sammy.co.jp/japanese/product/pachislot/2018/hokuto_rasetsu/campaign/application.html
- グリーンべると: https://news.p-world.co.jp/articles/9992/greenbelt
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E5%8C%97%E6%96%97%E3%81%AE%E6%8B%B3%20%E4%BF%AE%E7%BE%85%E3%81%AE%E5%9B%BD%E7%AF%87%20%E7%BE%85%E5%88%B9Ver%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- HAZUSE: https://hazuse.com/machine/pachislot/7S0983/genre/201/
- 一撃: https://1geki.jp/slot/s_hokuto_sr/
- 一撃 設定変更: https://1geki.jp/slot/s_hokuto_sr/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/55750/

### No.1190 FAIRY TAIL
- HAZUSE: https://hazuse.com/machine/pachislot/7S1186/
- P-Summa: https://psumma.jp/featured/42539/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/55964/
- 一撃 設定変更: https://1geki.jp/slot/s_fairy_tail/3/
- 一撃 朝一ステージ: https://1geki.jp/slot/s_fairy_tail/5/
- 期待値見える化: https://slotjin.com/slot/fairytail/
- すろぱちくえすと: https://www.slopachi-quest.com/article/pachislot-fairytail/

### 5/7境界監査
- すろぱちくえすと 2018導入順: https://www.slopachi-quest.com/article/sindai-2018/
- パチスロ立ち回り講座 新台導入予定日: https://crankyseven.com/newmachine-info.htm
- 2-9伝説 新台情報: https://29den.com/newslot/
- 楽シーサー30 ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/56854/
- 楽シーサー30 すろぱちくえすと: https://www.slopachi-quest.com/article/tanosi-sa-30pai/
