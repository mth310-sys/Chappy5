# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **892**
- latestRecordAdded: **パチスロ ガン×ソード**（高砂電器産業 / TAKASAGO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-08_gun-x-sword.md`
- chronologicalFrontier: **2015-06-08**
- frontierLatestMachine: **パチスロ ガン×ソード**
- frontierRecord: `docs/real_machine_db/machines/2015-06-08_gun-x-sword.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.891 `2015-06-08_daiku-no-gensan-sakura-mankai-gen-dream-ver.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **891件 / 2015-06-08 / GROUP_OPEN**。
- 既存性能値の再収集は行わず、次の未処理機種から継続した。

## No.892 — パチスロ ガン×ソード

- record: `docs/real_machine_db/machines/2015-06-08_gun-x-sword.md`
- manufacturer: **高砂電器産業 / TAKASAGO**
- releaseDate canonical: **2015-06-08**
- modelName: **ガンソードDT**
- inspectionNumber: **4S1120**
- generation: **5号機**
- systemType: **AT / 周期融合抽選 / バトル継続型**

### 性能コア

- 機械割: **96.8 / 98.9 / 99.5 / 103.1 / 106.5 / 110.2%**。
- AT「REVENGE BATTLE」初当たり: **1/248 / 240 / 222 / 216 / 198 / 185**。
- 50枚ベース: **約32G/50枚**。
- AT純増: **約2.8枚/G**。
- AT基本: **1ラウンド18G**（前半10G + バトル8G）、継続率 **77～98%**。
- 通常時は32 / 64 / 128 / 256Gの4周期を複合する周期融合抽選。
- 周期モード別最大天井: **128 / 320 / 640 / 1024G**。

### resetBehavior v0.7

- 機種名表記揺れ（ガン×ソード/ガンソード）、型式 `ガンソードDT`、高砂/TAKASAGO/KPE高砂と、設定変更/リセット/朝一/据え置き/電源OFF ON/周期/天井/モード/ガックンを組み替えて再探索。
- HAZUSE、必勝本、P-WORLD、当時業界記事、当時攻略記事、後年DBを横断した。
- 通常の周期モード・天井構造は高信頼で固定できたが、**設定変更時に周期進捗をRESET/CARRY_OVERのどちらにするか、設定変更時専用の周期モード振り分け**を直接示す本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の周期進捗/モード/内部状態も `UNVERIFIED_AFTER_RESEARCH`。
- 純粋な設定変更なし電源OFF→ONも `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定短縮天井、朝一専用高確保証、AT/CZ当選率優遇など公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有ガックン/液晶初期表示等の確定的変更判別も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- HAZUSE掲載の32Gモード移行率 25 / 25 / 35 / 25 / 30 / 33% は通常解析であり、設定変更専用と明記されていないためreset専用値へ流用していない。

### definition control

- 全国ホール導入開始 **2015-06-08** と、PiDEA Xの納品日 **2015-06-07予定**は別イベントとして保持。
- 通常時周期モードの移行率と設定変更時初期振り分けを混同しない。
- 一般的な5号機AT挙動からresetBehaviorを推定しない。
- 実機完全再現用のCZ内部抽選、AT中詳細継続振り分け等は収集対象外。

## 2015-06-08群監査 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **吉宗～極～** — 大都技研 — No.888。
2. **デビルサバイバー2 最後の7日間** — オリンピア — No.889。
3. **パチスロ おとめ妖怪ざくろ** — 北電子 — No.890。
4. **パチスロ大工の源さん～桜満開！源DREAM Ver.～** — 三洋物産 — No.891。
5. **パチスロ ガン×ソード** — 高砂電器産業 / TAKASAGO — No.892。

- 2015-06-08の導入一覧、当時スレッド、メーカー/解析DB系統を再監査し、上記5機以外の具体日付き未登録5号機を今回安全に固定できなかった。
- よって **`2015-06-08_GROUP_CLOSED_FOR_CURRENT_RESEARCH`** とする。
- 後続QAで新資料が見つかった場合は遡及追加可能。現在の本線は06/09以降へ進める。

## 次回再開地点

1. **recordCount 892 / chronologicalFrontier 2015-06-08 / GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.892を再確認。
3. **2015-06-09～2015-06-21の境界監査**を行い、具体日付き未登録5号機があれば最古から処理する。
4. 境界に追加がなければ **2015-06-22群**へ進む。
5. 2015-06-22の強い候補: **ヱヴァンゲリヲン・希望の槍**（ビスティ）。一次/業界/解析で全国実ホール導入日を再確認してから登録する。型式候補 `ヱヴァンゲリヲン・希望の槍R`。
6. **猛虎花形**も06/22周辺候補として存在するが、現時点ではP-WORLDページ更新日だけで導入日と断定せず、次回exact dateを再監査する。
7. exact release dateでは検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
8. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名とreset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
9. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・後継機のresetBehaviorを流用しない。
- 通常モード移行率とreset専用振り分けを分離する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。

## 主要出典 — 取得日 2026-09-07

### パチスロ ガン×ソード
- HAZUSE: https://hazuse.com/machine/pachislot/4S1120/
- パチ&スロ必勝本: https://p.hisshobon.jp/machine/2579/1/52224
- PiDEA X: https://www.pidea.jp/articles/KPE%E3%80%8C%E3%82%AC%E3%83%B3%C3%97%E3%82%BD%E3%83%BC%E3%83%89%E3%80%8D%E6%96%B0%E6%8A%80%E8%A1%93%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5AT%E6%90%AD%E8%BC%89
- グリーンべると: https://web-greenbelt.jp/00007690/
- P-WORLD: https://www.p-world.co.jp/machine/database/7709
- KONAMI公式系 こちらマジハロ情報局: https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150623.html
- 2015年導入機一覧回顧: https://slotnews777.blog.fc2.com/blog-entry-2348.html

### 次候補 / 境界
- ヱヴァンゲリヲン・希望の槍: 2015-06-22稼働開始を示すエヴァンゲリオン公式系年表/資料を次回再照合する。
