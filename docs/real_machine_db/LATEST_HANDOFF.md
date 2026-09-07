# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **889**
- latestRecordAdded: **デビルサバイバー2 最後の7日間**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-08_devil-survivor2-saigo-no-7nichikan.md`
- chronologicalFrontier: **2015-06-08**
- frontierLatestMachine: **デビルサバイバー2 最後の7日間**
- frontierRecord: `docs/real_machine_db/machines/2015-06-08_devil-survivor2-saigo-no-7nichikan.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、旧 `LATEST_HANDOFF.md`、直前No.888 `2015-06-08_yoshimune-kiwami.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **888件 / 2015-06-08 / GROUP_OPEN**。
- 旧会話上の進捗ではなく、main実体のLATEST_HANDOFFを優先して再開地点を確定した。

## No.889 — デビルサバイバー2 最後の7日間

- record: `docs/real_machine_db/machines/2015-06-08_devil-survivor2-saigo-no-7nichikan.md`
- manufacturer: **オリンピア**
- releaseDate canonical: **2015-06-08**
- modelName: **デビルサバイバー2最後の7日間H1**
- inspectionNumber: **5S0051**
- generation: **5号機**
- systemType: **AT / 差枚数管理 / サバイバルポイント周期管理**

### 性能コア

- 機械割: **97.1 / 98.5 / 100.4 / 104.0 / 108.5 / 113.0%**。
- AT初当たり: **1/497.77 / 465.94 / 437.73 / 379.56 / 319.59 / 271.52**。
- 50枚ベース: **約48.93G/50枚**。
- AT「最後の7日間」: **純増約2.8枚/G**。
- 基本初期差枚: **50枚 + 全役上乗せ悪魔による上乗せ分**。
- 通常時は1Gにつき1pt以上獲得し、200ptごとにCZ抽選、500ptごとにAT抽選。
- ポイント天井 **2000ptでAT確定**。解析上の平均到達目安約1060Gは固定G天井ではないため定義分離。
- CZ6連続非当選後の次回7回目CZでAT確定となるCZスルー天井あり。

### resetBehavior v0.7

- 設定変更時は **前日の内部サバイバルpt進捗を消去し、初期ptを再抽選**。液晶上は0ptでも内部的にptを持った状態から始まる解析あり。
- **エンカウントモード再抽選**、**CZモードは設定変更時専用振り分け**。
- 電源OFF→ONのみでは **内部pt・内部モード・天井進捗を引継ぎ**。液晶表示は0ptになり得るため表示だけで変更判別不可。
- 当時解析では内部状態も設定変更でクリア/再セット、電断で引継ぎ。
- 設定変更時エンカウントモード: **LOW 56.56 / MID 33.33 / HI 10.00 / SP1 0.10 / SP2 0.01%**。
- 設定変更時CZモード:
  - 設定1～3: **A90 / B2 / C7 / D1%**
  - 設定4: **A87.5 / B2 / C8.5 / D2%**
  - 設定5: **A83 / B2 / C12 / D3%**
  - 設定6: **A76 / B2 / C18 / D4%**
- リセット時の内部初期サバイバルpt振り分けは、表記揺れ・型式・メーカー・シリーズ名とリセット関連語を変えた再探索後も **`UNVERIFIED_AFTER_RESEARCH`**。
- CZスルー回数の据え置き/純電断契約は独立高信頼資料を固定できず **`UNVERIFIED_AFTER_RESEARCH`**。
- 朝一開始ステージは「設定変更/電断ともランダム」と「設定変更は再抽選・電断は引継ぎ」が競合するため **`CONFLICT_START_STAGE_BEHAVIOR`**。
- 本機固有ガックン確定判別は **`NONE_CONFIRMED_AFTER_RESEARCH`**。
- 有利区間は **`NOT_APPLICABLE_5TH_GEN_PRE_5_9`**。

### definition control

- 2000pt天井を2000G天井と扱わない。
- 約1060Gはポイント獲得を含む平均到達目安で、固定/最大天井Gではない。
- 液晶0ptと内部0ptを混同しない。設定変更・電断とも見た目上0ptになり得る。
- 一部DBのメーカー「平和」表記はブランド親会社表記として扱い、型式/HAZUSE/P-WORLDに合わせ **オリンピア**をcanonicalとする。

## 2015-06-08群監査 — OPEN

処理済み:
1. **吉宗～極～** — 大都技研 — No.888。
2. **デビルサバイバー2 最後の7日間** — オリンピア — No.889。

同日未処理の強い候補:
1. **パチスロおとめ妖怪ざくろ** — 北電子。
2. **大工の源さん桜満開！源DREAM Ver.** — 三洋。
3. **パチスロガンソード** — KPE高砂。

- 複数機が残るため **`2015-06-08_GROUP_OPEN`** を維持。

## 次回再開地点

1. **recordCount 889 / chronologicalFrontier 2015-06-08 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.889を再確認。
3. 次の未処理機種 **「パチスロおとめ妖怪ざくろ」（北電子）** から性能コア + resetBehavior v0.7を収集する。
4. 続いて `大工の源さん桜満開！源DREAM Ver.`、`パチスロガンソード` を同日キュー内で確認し、06/08群の全メーカー再監査後にのみCLOSED判定する。
5. exact release dateでは検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名と reset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置きと純電断を自動で同義扱いしない。今回は純電断の直接資料を個別に採用。
- 同名/近似名・続編機のresetBehaviorを流用しない。
- ポイント天井と実ゲーム数換算を混同しない。
- 表示値と内部値を混同しない。
- 競合資料は平均・恣意的統合せずCONFLICTで保持。

## 主要出典 — 取得日 2026-09-07

### デビルサバイバー2 最後の7日間
- HAZUSE: https://hazuse.com/machine/pachislot/5S0051/
- K-Navi: https://p-kn.com/slot/2256/
- パチマガスロマガ 確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/h-1.php
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/c.php
- パチマガスロマガ AT突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/120/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7704
- アタリ7: https://www.atari7.com/slot/date1428296557.php
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/7612/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2565/1/52279

### 2015-06-08同日群
- 前回handoffで確認済みの2015年導入新台まとめ、および次回各機種の個別資料を再照合して処理する。
