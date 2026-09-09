更新日: 2026-09-10

## 現在地点
- recordCount: **1146**
- latestRecordAdded: **パチスロ 地獄少女 宵伽**（藤商事）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_jigoku-shoujo-yoi-no-togi.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ 地獄少女 宵伽 — No.1146**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1145「トロピカルKISS スウィートVer.」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1145件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「パチスロ 地獄少女 宵伽」** を重複確認し、performance core + resetBehavior v0.7を収集して **No.1146** としてmainへ保存。
- 藤商事公式でシリーズ第2弾・Fusion Core・ART機を確認。ホール導入日はK-Navi、一撃、ちょんぼりすた、2-9伝説で **2017-09-19** が一致。プレミアム先行導入の記録は別扱い。
- formalModelName は中古実機系複数資料で **地獄少女 宵伽FSB** を確認。検定番号は表記揺れ・FSB・藤商事・検定/7S等へ再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コア: 機械割 **97.7 / 99.1 / 100.5 / 103.6 / 107.3 / 111.6%**。ART初当たり **1/415.2 / 379.1 / 356.5 / 319.6 / 261.1 / 221.7**。ボーナス合算は全設定 **1/1057.0**。
- ベース **約39G/50枚**。BIG **約210枚**。ART純増は **単体約1.8枚/G / ボーナス込み約2.0枚/G** と定義分離。基本ART「地獄巡行」は **40〜80G+5G**。
- 通常時は **通常 / 天国準備 / 天国** の3モード。最大天井は **1200 / 800 / 100G+前兆**。ART間カウントでボーナスでは天井をリセットしない。
- resetBehavior: **設定変更＝天井G RESET / モード再抽選 / 状態再抽選 / CZモード再抽選**。純電源OFF→ONは **天井G・モード・状態・CZモードCARRYOVER**。据え置きを純電断とは別条件で明記した契約は **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- 設定変更時モード振り分けを公開数値で保存。設定1は **通常44.53 / 天国準備44.92 / 天国10.55%**、設定5は **33.59 / 33.59 / 32.81%**、設定6は **34.77 / 37.11 / 28.13%** 等。
- 設定変更時高確スタート率は **25.00〜33.59%**。高確選択時G数は **10G 66.80 / 15G 32.03 / 20G 0.39 / 25G 0.39 / 30G 0.39%**。
- 設定変更時CZモードは **A 8.59 / B 33.20 / C 33.20 / D 25.00%**。
- 朝一恩恵は固定短縮天井ではなく、再抽選されたモード次第で最大天井が **100/800/1200G** になる点。天国振り分けは設定1 10.55%〜最大設定5 32.81%。高確スタートも25.00〜33.59%。
- 設定変更で前日ART間G数・モード・状態・CZモードを失うため、前日有利状態を保持していた場合は不利。`怨みストック`の設定変更/据え置き/純電断契約は十分な再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/純電源OFF→ONとも液晶ステージは学校/商店街/公園から抽選とする解析があり、ステージ単独では確定判別不可。本機固有の確定ガックン・初期出目/ランプ契約は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1146 — パチスロ 地獄少女 宵伽
- manufacturer: **藤商事**
- releaseDate: **2017-09-19**
- formalModelName: **地獄少女 宵伽FSB**（二次資料複数一致）
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **ceiling counter RESET / mode REROLL / state REROLL / CZ mode REROLL**。
- stay setting: **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- pure power OFF→ON: **ceiling counter / mode / state / CZ mode CARRYOVER**。
- mode ceilings: **通常1200G / 天国準備800G / 天国100G (+前兆)**。
- reset mode distribution:
  - s1 **44.53 / 44.92 / 10.55%**
  - s2 **42.19 / 42.58 / 15.23%**
  - s3 **41.02 / 41.41 / 17.58%**
  - s4 **38.67 / 39.06 / 22.27%**
  - s5 **33.59 / 33.59 / 32.81%**
  - s6 **34.77 / 37.11 / 28.13%**
  - order: 通常 / 天国準備 / 天国
- reset high-state probability: **25.00 / 26.56 / 28.13 / 29.69 / 31.64 / 33.59%**。
- reset CZ mode: **A8.59 / B33.20 / C33.20 / D25.00%**。
- reset detection: deterministic machine-specific gakkun **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137
4. ぱちスロ ウルトラセブン — No.1138
5. SLOT魁!!男塾〜目指せ！闘宴大武會〜 — No.1139
6. 盗忍！剛衛門 — No.1140
7. シンデレラブレイド3 — No.1141
8. 想定科学パチスロ STEINS;GATE廻転世界のインダクタンス ランヴォア — No.1142
9. ワンダークーちゃん — No.1143
10. トロピカルKISS ビターVer. — No.1144
11. トロピカルKISS スウィートVer. — No.1145
12. **パチスロ 地獄少女 宵伽 — No.1146**

### 同日横断監査・未処理候補
- **イースⅠ&Ⅱ — No.1147候補**。2017-09-19候補。次本線として導入日・型式・重複確認後、performance core + resetBehavior v0.7を収集する。
- **紅き魂は桜の如く** — 2017-09-19候補、未登録。
- **乱嵐エイサー ver.100** — 2017-09-19候補、未登録。
- `闘え!サラリーマン` は一部当時一覧で2017-09-19表記が見つかるため、同日群CLOSED前に導入日・型式・独立発売有無を再監査する。
- 上記処理後も全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査し、漏れがなければCLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1146を再取得。
2. **1146件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「イースⅠ&Ⅱ」— No.1147候補**。
4. 続いて **紅き魂は桜の如く → 乱嵐エイサー ver.100** を重複・導入日確認しながら処理。
5. `闘え!サラリーマン` の9/19導入可否を再監査し、2017-09-19同日全メーカー監査を継続。追加漏れがなければCLOSED判定して次導入日群へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1146 パチスロ 地獄少女 宵伽
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_jigoku2/
- K-Navi: https://p-kn.com/slot/2875/
- 一撃 機種TOP: https://1geki.jp/slot/s_jigoku2/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_jigoku2/3/
- 一撃 朝イチ: https://1geki.jp/slot/s_jigoku2/5/
- 一撃 内部モード: https://1geki.jp/slot/s_jigoku2/43/
- 一撃 内部状態: https://1geki.jp/slot/s_jigoku2/44/
- 一撃 CZモード: https://1geki.jp/slot/s_jigoku2/45/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/43934/
- 2-9伝説: https://2-9densetsu.com/jigoku2/
- P-WORLD: https://www.p-world.co.jp/machine/database/8482
- 中一商事（型式名）: https://www.nakaiti.com/html/sFujisho016.html
- 愛品館（型式名補助）: https://www.aihin.co.jp/new/news-1042354/

### 2017-09-19群監査
- 2017年導入機種まとめ: https://squid-and-ball.net/archives/776
