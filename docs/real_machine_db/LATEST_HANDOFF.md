# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **905**
- latestRecordAdded: **パチスロ ストライクウィッチーズ**（オーイズミ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-08-03_pachislot-strike-witches.md`
- chronologicalFrontier: **2015-08-03**
- frontierLatestMachine: **パチスロ ストライクウィッチーズ**
- frontierRecord: `docs/real_machine_db/machines/2015-08-03_pachislot-strike-witches.md`
- schema: **resetBehavior v0.7**
- status: **2015-08-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.902 `2015-08-03_bonnou-breaker-zen.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時handoffは **902件 / 2015-08-03 / 08-03_GROUP_OPEN**。
- 調査中、`2015-08-03_garinpo-30.md` がmainへ先行追加済みなのにhandoffだけ902件のままという同期ズレを検出。重複作成せず既存レコードを **No.903相当**として引き継いだ。
- 続けてNo.904 `ジャッカスチーム`、No.905 `パチスロ ストライクウィッチーズ` を新規登録した。

## No.903相当 — ガリンポ-30

- record: `docs/real_machine_db/machines/2015-08-03_garinpo-30.md`
- manufacturer: **エマ**（パチマガスロマガ内にはZANN表記あり。レコード内で媒体分類/ブランド差として保持）
- formalModelName: **ガリンポ-30**
- inspectionNumber: **5S0228**
- systemType: **ノーマル / 完全告知 / 30Φ**
- canonical releaseDate: **2015-08-03**
- ボーナス合算: **1/173 / 160 / 148 / 138 / 129 / 124**。
- PAYOUT: **96 / 98 / 101 / 104 / 106 / 108%**。
- BB **270枚** / MB **90枚**。
- 天井非搭載。有利区間非該当。
- 50枚ベース、純電断時の本機固有状態、ガックン等は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。

## No.904 — ジャッカスチーム

- record: `docs/real_machine_db/machines/2015-08-03_jackass-team.md`
- manufacturer: **大都技研**
- formalModelName: **JACKASSTEAM A7**
- inspectionNumber: **5S0224**
- systemType: **A+ART / 本物ボーナス+疑似ボーナス / 新基準機**
- canonical releaseDate: **2015-08-03**。2015-08-02は最速納品予定として分離。
- PAYOUT: **97.4 / 98.7 / 100.8 / 104.8 / 110.3 / 119.2%**。
- ART初当たり: **1/591.7 / 578.8 / 555.8 / 529.9 / 482.9 / 409.6**。
- 50枚ベース: **約35.5G**。純増: **約2.0枚/G**。
- 本物BIG **108枚** / RB **36枚**、ブリッツボーナス30G+α、ART50G+α。
- 通常天井 **800G+前兆** / 天国 **100G+前兆**。
- 設定変更時: **天井Gリセット / モード再抽選 / 状態再抽選**。
- 据え置き時: **天井G / モード / 状態を引継ぎ**。
- 設定変更時専用モード: **リセットA 90% / リセットB 10%**。リセットBは **天国確定**。
- 純電源OFF→ON時の正常機固有内部契約と本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## No.905 — パチスロ ストライクウィッチーズ

- record: `docs/real_machine_db/machines/2015-08-03_pachislot-strike-witches.md`
- manufacturer: **オーイズミ**
- formalModelName: **パチスロストライクウィッチーズVX**
- inspectionNumber: **5S0213**
- systemType: **AT / 疑似ボーナス / 差枚数管理型AT**
- canonical releaseDate: **2015-08-03**。2024年スマスロ続編とは分離。
- PAYOUT: **97.6 / 99.0 / 101.0 / 103.9 / 107.0 / 111.2%**。
- AT初当たり: **1/697.3 / 667.9 / 638.6 / 592.7 / 538.6 / 483.2**。
- 疑似ボーナス合算: **1/307.5 / 298.7 / 289.6 / 274.9 / 255.7 / 235.3**。
- CZ初当たり: **1/138.8 / 136.3 / 134.4 / 129.3 / 121.8 / 108.8**。
- 50枚ベース **約46.8G** / 純増 **約2.2枚/G** / BIG **55G** / REG **30G**。
- AT・ボーナス間天井 **1280G**、CZ間天井 **288G**、AT6スルー後は7回目以降ボーナスでAT期待度約80%。

### resetBehavior v0.7

- 設定変更時: **天井リセット / 内部モード再抽選 / 滑走路ステージ**。
- 純電源OFF→ON: **天井引継ぎ / 内部モード引継ぎ**。ステージは当時資料でも調査中。
- 設定変更時モード振り分け:
  - 通常A-D 各5.00%
  - 通常E-F 各10.00%
  - 通常G-H 各20.00%
  - 天国A 17.50% / B 2.25% / C 0.20% / D 0.05%
- 朝一リセット時 **天国合計20%**。天国なら **32G以内CZ確定**。
- 通常G/H+天国で **60%が通常G以上**。
- 朝一数Gの即前兆はリセット前提店舗では天国推測材料。ただし設定変更自体の確定判別とはしない。
- 本機固有ガックン: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-08-03群監査 — CLOSED_FOR_CURRENT_RESEARCH

今回までの処理済み:
1. **煩悩BREAKER禅** — 山佐 — No.902。
2. **ガリンポ-30** — エマ — No.903相当（main先行追加を同期）。
3. **ジャッカスチーム** — 大都技研 — No.904。
4. **パチスロ ストライクウィッチーズ** — オーイズミ — No.905。

- 直前handoffで固定されていた08/03残候補3機をすべて処理。
- さらに `2015年8月3日 / 2015-08-03 / 2015/08/03 + パチスロ / 新台 / 導入`、メーカー名を組み替えて横断検索。
- 追加でcanonical exact hall-startを2015-08-03に置くべき未登録5号機を今回固定できなかったため、**2015-08-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。

## 2015-08-04〜2015-08-16境界 — CLOSED_FOR_CURRENT_RESEARCH

- 2015-08-10を含む期間を「導入/ホール導入開始/新台」で再監査したが、canonical exact hall-startを置くべき未登録5号機を今回固定できなかった。
- 次の強い具体日付きパチスロ群は **2015-08-17**。
- アクロス公式系資料は『サンダーVリボルト』を2015-08-17全国導入開始、グリーンべるとは納品2015-08-16予定としており、納品/実導入を分離できる。
- 高砂電器産業『乙女魂』も2015-08-17導入を複数資料で確認。

## 次回再開地点

1. **recordCount 905 / chronologicalFrontier 2015-08-03 / 08-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.905を再確認。
3. **2015-08-04〜08-16境界はCLOSED_FOR_CURRENT_RESEARCH**として引継ぎ、2015-08-17群へ進む。
4. 先頭候補 **アクロス「サンダーVリボルト」** を未登録確認後、技術介入通常/完全攻略機械割を別定義で収集し、resetBehaviorも本機固有資料で調査する。
5. 続いて **高砂電器産業「乙女魂」** を処理する。
6. 08/17群は上記だけで閉じず、K-Navi / 当時新台カレンダー / メーカー・業界記事 / 旧DBで全メーカー横断再監査後のみCLOSEDにする。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- main先行レコードを発見した場合は重複作成せずhandoffを同期する。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 通常遊技中の保持情報を営業日跨ぎ契約へ自動転記しない。
- 前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品 / 導入予定 / 地域先行 / 全国実ホール導入を分離する。
- 朝一設定推測数値と設定変更判別を混同しない。

## 主要出典 — 取得日 2026-09-07

### ガリンポ-30
- P-WORLD: https://www.p-world.co.jp/machine/database/7791
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/zann_slot/01/h.php
- pacnk: https://pacnk.com/slot/tools/sh_garinpo.html
- ALL7 2015年8月: https://www.all7.jp/plans/index/2015/08/10

### ジャッカスチーム
- K-Navi: https://p-kn.com/slot/2299/
- グリーンべると: https://web-greenbelt.jp/00007876/
- P-WORLD: https://www.p-world.co.jp/machine/database/7770
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/60/c.php
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/jackass-team-reset/
- すろぱちくえすと reset mode: https://www.slopachi-quest.com/article/jackass-team-resetmode/

### パチスロ ストライクウィッチーズ
- HAZUSE: https://hazuse.com/machine/pachislot/5S0213/
- グリーンべると: https://web-greenbelt.jp/00007898/
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/9825/
- すろぱちくえすと reset: https://www.slopachi-quest.com/article/strike-witches-reset/
- 5号機クロニクル: https://5goki.com/oizumi

### 次群
- サンダーVリボルト K-Navi: https://p-kn.com/slot/2323/
- サンダーVリボルト グリーンべると: https://web-greenbelt.jp/00007962/
- ユニバ公式全国導入告知: https://ameblo.jp/aruzefreaks/entry-12058430498.html
- 乙女魂: https://chonborista.com/slot/takasago-slot/11303/
