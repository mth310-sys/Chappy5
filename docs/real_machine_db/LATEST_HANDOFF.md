# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **502**
- latestMachineAdded: **ギラギラ爺サマー**（大都技研 / 2010-08-02）
- latestRecord: `docs/real_machine_db/machines/2010-08-02_giragira-jiisummer.md`
- chronologicalFrontier: **2010-08-02**
- frontierLatestMachine: **ギラギラ爺サマー**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線501実レコード「ゴルゴ13 あの男に連絡だ!」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **501** / chronologicalFrontier **2010-08-02**。
- LATEST_HANDOFF指定の2010-08-02同日群最優先候補「ギラギラ爺サマー」をrepo検索し未登録確認。本機を502件目として追加。
- 書き込み直前にLATEST_HANDOFFを再取得し501地点のまま＝別リレー先行更新なしを確認してから追加した。
- 導入日についてK-Naviは全国ホール導入開始 **2010-08-02**、2010-06-29グリーンべるとは納品開始 **2010-08-01予定**。物流開始と全国導入を分離し主値は2010-08-02。

## 502 — ギラギラ爺サマー 要約

- メーカー: **大都技研**
- 型式名: **ギラギラジイサマー 4**（後年単一資料。独立高信頼照合待ち）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 世代/タイプ: **5号機 / A+ART / 2段階ART「メガギガウェーブ」**
- ボーナス合算: **1/80.02 / 1/77.56 / 1/79.82 / 1/77.37 / 1/79.82 / 1/77.19**
- BIG: **1/6553.60 / 1/5461.33 / 1/5461.33 / 1/4681.14 / 1/5461.33 / 1/4096.00**
- REG: **1/215.58 / 1/199.80 / 1/215.58 / 1/199.80 / 1/215.58 / 1/199.80**
- CT: **全設定1/129.77**
- 50枚ベース: **29.97 / 30.02 / 30.04 / 30.48 / 30.46 / 30.84G/1000円**（当時パチマガスロマガ独自調査）
- ART「ギラギラッシュ」: **50G+α / 約+1.8枚/G**
- 無限ART「チャレンジラッシュ」: **次回ボーナスまで / 約+1.8枚/G**
- BIG約**200枚**、チャンスタイム最大**192枚**、乗ってけタイム最大**40枚**（P-WORLD）
- 天井: **通常状態500G消化後、乗ってけタイム or ギラちゃんす成立で100G以上ART確定**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_APPROVAL_UNVERIFIED_PAYOUT_CONFLICT**

## payoutRate CONFLICT

- P-WORLD / K-Navi: **97.6 / 98.4 / 99.9 / 104.9 / 110.0 / 115.2%**
- パチマガスロマガ シミュレート値: **97.74 / 99.35 / 101.19 / 106.46 / 111.58 / 116.43%**
- 設定2以降は丸めだけでは説明しにくいため、平均せず `CONFLICT` として双方保持。

## resetBehavior v0.7 — ギラギラ爺サマー

- **設定変更**: P-WORLDで液晶に変化なし、**50%で高確率状態**、通常モード以上が確定・高確モードの可能性あり。CrankySevenで**天井までのゲーム数クリア**を確認。
- **据え置き**: 設定変更時のみカウンタクリアという資料から500G進捗継続は強く示唆されるが、本機固有の「据え置きなら前日G数引継ぎ」という直接文言を確定できず `UNVERIFIED_AFTER_RESEARCH`。低高状態・ART権利継承も未確認。
- **電源OFF→ON**: 初代2010年機固有の500G進捗、低高状態、ART権利、液晶/リール挙動を確定できず `UNVERIFIED_AFTER_RESEARCH`。2022年「超ギラギラ爺サマー」の情報は混用しない。
- **ゲーム数/天井**: 通常500G。設定変更で天井進捗クリア。設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 設定変更後は通常モード以上、高確モードの可能性あり。状態として**50%で高確率**。残り50%の厳密状態、詳細振り分けは未確定。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: **50%高確率状態**。
- **朝一不利**: 設定変更で前日500G天井進捗が失われる。
- **変更判別**: P-WORLDは**設定変更しても液晶に変化なし**。ガックン/初期出目/ランプ等は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更時高確率状態 **50%**、通常天井 **500G**。固定短縮天井、設定変更専用ART初当たり率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- ジャックと豆の木直後の実在 `resetBehavior` 欠損ファイルを順序保証付きで確定してから補完する。推測でQA進捗を進めない。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### ギラギラ爺サマー
- グリーンべると 2010-06-29: `https://web-greenbelt.jp/00002712/`
- K-Navi 機種ページ: `https://p-kn.com/slot/1244/`
- K-Navi 発売ニュース 2010-06-18: `https://p-kn.com/topics/news/1046/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6022`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/47/h.php`
- パチマガスロマガ 小役/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/47/c.php`
- CrankySeven 5号機天井一覧: `https://crankyseven.com/sp/tenjo-5ka.htm`
- pachinko’s blog 型式情報: `https://pachinko.hatenablog.jp/entry/2010/08/giragira-G-summer`
- 4Gamer 2014-06-13: `https://www.4gamer.net/games/261/G026143/20140613109/`

## 今回のGitHub更新

- 502 ギラギラ爺サマー追加: commit `8d38fd78ac4ee141923b34ebee6261bae1d1e4a9`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 502 / chronologicalFrontier 2010-08-02**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-08-02同日群をもう一段最終監査**。K-Navi、P-WORLD、メーカー別一覧、当時業界記事で同日未登録パチスロの有無を再確認し、あれば最古/同日順で503件目候補とする。
3. 同日群を閉じた後は **2010-08-03以降**を日付境界監査。8/3〜8/22に全国導入・地域先行・月粒度漏れがないかを優先確認する。
4. 現時点で後続の具体日候補としてK-Naviに **2010-08-23「ワイルドキャッツ」（ラスター）**を確認済み。ただし8/3〜22の監査を飛ばして直接進めない。
5. 502の後続QA対象は検定番号、型式名の高信頼独立照合、据え置き/単純電源OFF→ON、低高状態・ART権利継承、ガックン/初期出目。既存性能コアは再調査しない。
