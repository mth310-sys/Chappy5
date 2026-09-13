更新日: 2026-09-14

## 現在地点
- recordCount: **1659**
- latestRecordAdded: **Lパチスロ 戦姫絶唱シンフォギア 正義の歌 — No.1659**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-07-08_l-symphogear-seigi-no-uta.md`
- chronologicalFrontier: **2024-07-08**
- frontierLatestMachine: **Lパチスロ 戦姫絶唱シンフォギア 正義の歌 — No.1659**
- schema: **resetBehavior v0.7**
- status: **2024-07-08_BOUNDARY_OPEN_3_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1658 `L アカメが斬る！2` を確認して開始。
- README規定どおり、旧INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 直前handoff指定の次の未処理No.1659 `Lパチスロ 戦姫絶唱シンフォギア 正義の歌` を性能コア + resetBehavior v0.7で新規登録。
- 型式/検定はHAZUSE + 2024-03-13付け山口県公安委員会検定通過を扱う業界記事で照合。
- 導入日はSANKYO公式月表記に加え、HAZUSE・必勝本・P-WORLD・K-Navi・グリーンべると等が2024-07-08で一致。
- resetBehaviorはなな徹朝一/有利区間/モード、必勝本の設定変更&電源OFF/ON直接比較、P-WORLD等を主軸に照合。
- 設定2/4/5/6の有利区間移行時モード完全振り分け、ギアフラグモード初期振り分け、純電断時の抜剣状態、本機固有ガックンは検索語・資料系統変更後も固定公開値を確認できず欠損扱い。

## No.1659 — Lパチスロ 戦姫絶唱シンフォギア 正義の歌
- path: `docs/real_machine_db/machines/2024-07-08_l-symphogear-seigi-no-uta.md`
- manufacturer: **ジェイビー製造 / SANKYOブランド・販売**
- formalModel: **L戦姫絶唱シンフォギア 正義の歌jA** / inspectionCode: **3S1917**
- releaseDate: **2024-07-08**
- generation: **6.5号機 / スマスロ**
- systemType: **AT**
- settings: **L / 1 / 2 / 4 / 5 / 6（設定3なし・実質5段階設定）**
- payoutRate: **98.2 / 99.4 / 104.4 / 108.3 / 114.9%（設定1/2/4/5/6）**
- AT: **1/295 / 1/285 / 1/250 / 1/227 / 1/199**
- base: **約32G/50枚（約31.7G表記も補足保持）**
- netIncrease: **通常AT約2.8枚/G / 上位AT約5.0枚/G**
- basicPayout: **AT初期40G以上、ベル50G・レア役100G、ギアフラグは絶唱へ / シンフォギアBONUS20G**
- coreConfidence: **OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1659 resetBehavior v0.7
- setting change: **有利区間RESET、天井RESET、内部状態RESET、天井/エクスドライブ/ギアフラグ/CZ各モード・テーブル再抽選、抜剣メーターRESET。**
- carry over: **据え置きは有利区間・天井内部G・内部状態・各種モードをCARRY_OVER。**
- power OFF→ON: **天井内部G・天井モード・エクスドライブモード・ギアフラグモード・CZテーブル・内部状態・有利区間をCARRY_OVER。液晶G数と抜剣メーター表示はリセットされるが内部進行は引継ぎ。抜剣状態そのものはUNVERIFIED。**
- ceiling: **通常最大777G+α → 設定変更後最大498G+αへ短縮。天国は100G以内。**
- mode: **設定変更＝有利区間移行を伴い天国移行優遇。設定1は通常38% / 天国準備34% / 天国28%。設定2/4/5/6完全振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- CZ mode: **設定変更時12%でCZモード天国。選択時は250G以内にCZ「AXZバトル」へ突入。**
- advantageous section: **設定変更でRESET。据え置き/純電断でCARRY_OVER。有利区間ランプ判別不可。設定変更以外の区間リセット恩恵（絶唱バトル+CZ天国）は設定変更時には付与されない。**
- morning benefits: **最大天井498G+α、天国移行優遇、CZモード天国12%。**
- detection: **設定変更/据え置きとも表示はリセット、開始ステージもリディアン音楽院/フードパーク1:1で見た目判別不可。498G+α超過非当選やCZ前兆ゾーンの前日G数とのズレが据え置き濃厚材料。有利区間ランプ不可。本機固有ガックンは再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GAKKUN_AND_HIGH_SETTING_RESET_MODE_DISTRIBUTION_UNVERIFIED**

### 公開朝一関連数値 — No.1659
- 通常最大天井: **777G+α**
- 設定変更後最大天井: **498G+α**
- 天国モード天井: **100G以内**
- 有利区間移行時モード振り分け（設定1）: **通常38% / 天国準備34% / 天国28%**
- CZモード天国移行率（設定変更時）: **12%**
- 開始ステージ: **リディアン音楽院50% / フードパーク50%**
- 設定変更後57G/59Gビーチ移行: **天国準備 or 天国期待度アップ**（58Gはデフォルト）
- 設定2/4/5/6の完全モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- ギアフラグモード初期振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
- No.1659: 50枚ベースは主要資料で約32G、後年整理に約31.7G表記あり。丸め/算定差の可能性が高いためcanonical約32G、31.7Gは補足値。平均化しない。
- No.1659: 設定6の天国移行率は主要解析が「設定1の約2倍」と説明し、後年整理に約56%表記があるが、主要な固定振り分け表を確認できないため56%をcanonical固定値にしない。
- No.1659: 通常の上位AT終了/エンディング後の有利区間RESET恩恵は設定変更時には適用されないため、朝一恩恵と混同しない。
- 2024-06月次件数: 5機列挙と「6機種」市場集計の差は `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` としてQA debt継続。未知の第6機は推測追加しない。

## 2024-07-01境界 — CANONICAL CLOSED 1/1
1. 沖ドキ！BLACK — No.1656 DONE

## 2024-07-08候補 — OPEN 3/6
1. **スマスロ真・北斗無双 — No.1657 DONE**
2. **L アカメが斬る！2 — No.1658 DONE**
3. **Lパチスロ戦姫絶唱シンフォギア 正義の歌 — No.1659 DONE**
4. **Sバハマ30 — 次回No.1660候補**
5. **S ご～やちゃんぷる～30φ**
6. **S ご～やちゃんぷる～25φ**

境界監査メモ:
- 1geki 2024年7月新台カレンダーの7/8パチスロ6機を前handoffで確認済み。
- 30φ/25φ派生は全機種方針に従い、正式型式・性能差・市場上の独立導入を確認してから別レコード採番する。
- PB・地域先行・別型式・延期/段階導入を継続監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1659実レコードと本handoffを再取得確認。
2. **No.1660候補 `Sバハマ30`（2024-07-08）** を正式型式・メーカー・導入日・性能差まで再監査し、性能コア + resetBehavior v0.7で処理。
3. その後 `S ご～やちゃんぷる～30φ → S ご～やちゃんぷる～25φ` を正式型式・導入日・25φ/30φ差を監査しながら順に処理。
4. 6機処理後に2024-07-08境界をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定する。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1659 Lパチスロ 戦姫絶唱シンフォギア 正義の歌
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/962/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1917/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-81369/
- P-WORLD / グリーンべると 検定通過: https://news.p-world.co.jp/articles/27187/greenbelt
- 遊技通信 発表記事: https://news.p-world.co.jp/articles/27619/yugitsushin
- 遊技日本 発表記事: https://news.p-world.co.jp/articles/27665
- グリーンべると 導入記事: https://news.p-world.co.jp/articles/28149/greenbelt
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/83885/
- パチ&スロ必勝本 機種解説: https://p.hisshobon.jp/vpage/2624/2
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83867/
- パチ&スロ必勝本 通常時解説: https://p.hisshobon.jp/machine/4315/1/103977
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/760/22576/
- なな徹 天井: https://nana-press.com/kaiseki/machine/760/22574/
- なな徹 モード: https://nana-press.com/kaiseki/machine/760/22580/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/760/22577/
- P-WORLD: https://www.p-world.co.jp/machine/database/10050
- K-Navi: https://p-kn.com/slot/4151/
- ぽこすろっと（リセット判別補助）: https://www.nankaikoya.jp/symphogear-seiginouta-kitaichi/

### 境界監査
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
